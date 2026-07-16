const bcrypt = require("bcrypt");

const Client = require("../models/Client");
const Lawyer = require("../models/Lawyer");
const Admin = require("../models/Admin");

exports.clientSignup = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const client = new Client({
      name,
      email,
      password: hashedPassword,
      phone,
      photo: req.file ? req.file.path : null,
    });

    await client.save();

    res.status(201).json({
      message: "Client registered successfully!",
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    res.status(500).json({
      message: "Error registering client.",
      error: err.message,
    });
  }
};

exports.lawyerSignup = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      phone,
      languages,
      city,
      experience,
      practiceArea,
      enrollmentId,
      court,
      state,
      bio,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const lawyer = new Lawyer({
      name,
      email,
      password: hashedPassword,
      phone,
      languages,
      city,
      experience,
      practiceArea,
      enrollmentId,
      court,
      state,
      bio,
      photo: req.file ? req.file.path : null,
      isApproved: false,
    });

    await lawyer.save();

    res.status(201).json({
      message: "Signup successful! Waiting for admin approval.",
    });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Email already exists.",
      });
    }

    res.status(500).json({
      message: "Error registering lawyer.",
      error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const client = await Client.findOne({ email });
    const lawyer = await Lawyer.findOne({ email });
    const admin = await Admin.findOne({ email });

    let user = null;
    let role = "";

    if (client && (await bcrypt.compare(password, client.password))) {
      user = client;
      role = "client";
    } else if (lawyer && (await bcrypt.compare(password, lawyer.password))) {
      if (!lawyer.isApproved) {
        return res.status(403).json({
          message: "Your account is pending admin approval.",
        });
      }

      user = lawyer;
      role = "lawyer";
    } else if (admin && password === admin.password) {
      user = admin;
      role = "admin";
    }

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    req.session.user = {
      email: user.email,
      role,
    };

    res.status(200).json({
      message: `${role} login successful`,
      role,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({
        message: "Logout failed",
      });
    }

    res.clearCookie("connect.sid");

    res.json({
      message: "Logged out successfully",
    });
  });
};
