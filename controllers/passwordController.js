const bcrypt = require("bcrypt");

const Client = require("../models/Client");
const Lawyer = require("../models/Lawyer");

const otpStore = require("../utils/otpStore");

const sendOtp = require("../utils/sendOtp");

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const client = await Client.findOne({
      email,
    });

    const lawyer = await Lawyer.findOne({
      email,
    });

    if (!client && !lawyer) {
      return res.status(404).json({
        message: "Email not found",
      });
    }

    await sendOtp(email);

    res.json({
      message: "OTP sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const record = otpStore[email];

    if (!record || record.otp !== otp || Date.now() > record.expires) {
      return res.status(400).json({
        message: "Invalid OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    const client = await Client.findOne({
      email,
    });

    const lawyer = await Lawyer.findOne({
      email,
    });

    if (client) {
      await Client.updateOne(
        { email },
        {
          password: hashedPassword,
        },
      );
    }

    if (lawyer) {
      await Lawyer.updateOne(
        { email },
        {
          password: hashedPassword,
        },
      );
    }

    delete otpStore[email];

    res.json({
      message: "Password reset successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
