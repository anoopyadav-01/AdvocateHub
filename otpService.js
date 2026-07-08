const transporter = require("../config/mailConfig");

global.otpStore = {};

exports.sendOtp = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  global.otpStore[email] = {
    otp,
    expires: Date.now() + 10 * 60 * 1000,
  };

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset OTP",
    text: `Your OTP is ${otp}. Valid for 10 minutes.`,
  });
};
