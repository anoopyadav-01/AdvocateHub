const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  phone: String,
  languages: String,
  city: String,
  experience: String,
  practiceArea: String,
  enrollmentId: String,
  court: String,
  state: String,
  bio: String,
  photo: String,
  isApproved: { type: Boolean, default: false },
});

module.exports = mongoose.model("Lawyer", lawyerSchema);
