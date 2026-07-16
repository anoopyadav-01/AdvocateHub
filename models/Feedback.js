const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
  lawyerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lawyer",
    required: true,
  },
  enrollmentId: {
    type: String,
    required: true,
  },
  clientName: { type: String, required: true },
  clientPhoto: { type: String },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Feedback", feedbackSchema);
