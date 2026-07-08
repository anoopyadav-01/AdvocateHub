const transporter = require("../config/mailConfig");
const otpStore = require("./otpStore");

const sendOtp = async (email) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  otpStore[email] = {
    otp,
    expires: Date.now() + 10 * 60 * 1000,
  };

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP for Password Reset",
    text: `Your OTP is: ${otp}. It is valid for 10 minutes.`,
  });
};

module.exports = sendOtp;
