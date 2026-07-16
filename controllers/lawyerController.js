const Lawyer = require("../models/Lawyer");

exports.getAllLawyers = async (req, res) => {
  try {
    const lawyers = await Lawyer.find();

    res.json(lawyers);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getLawyerData = async (req, res) => {
  try {
    const lawyer = await Lawyer.findOne({
      email: req.session.user.email,
    });

    if (!lawyer) {
      return res.status(404).json({
        message: "Lawyer not found",
      });
    }

    res.json(lawyer);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.updateLawyerData = async (req, res) => {
  try {
    const { name, email, phone, experience, practiceArea, bio } = req.body;

    const lawyer = await Lawyer.findOneAndUpdate(
      { email: req.session.user.email },
      {
        name,
        email,
        phone,
        experience,
        practiceArea,
        bio,
      },
      { new: true },
    );

    res.json({
      success: true,
      lawyer,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
