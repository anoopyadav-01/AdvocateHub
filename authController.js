const Lawyer = require("../models/Lawyer");
const Client = require("../models/Client");

const transporter = require("../config/mailConfig");

exports.pendingLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find({
      isApproved: false,
    });

    res.json(lawyers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.allLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find({
      isApproved: true,
    });

    res.json(lawyers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.allClients = async (req, res) => {
  try {
    const clients = await Client.find();

    res.json(clients);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.approveLawyer = async (req, res) => {
  try {
    const lawyer = await Lawyer.findByIdAndUpdate(
      req.params.lawyerId,
      {
        isApproved: true,
      },
      {
        new: true,
      },
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: lawyer.email,
      subject: "Profile Approved",
      html: `<h2>Congratulations ${lawyer.name}</h2>
               <p>Your profile has been approved.</p>`,
    });

    res.json({
      message: "Lawyer approved successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.rejectLawyer = async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id);

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: lawyer.email,
      subject: "Application Rejected",
      html: `<h2>Hello ${lawyer.name}</h2>
               <p>Your application was not approved.</p>`,
    });

    await Lawyer.findByIdAndDelete(req.params.id);

    res.json({
      message: "Lawyer rejected successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
