const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  lawyerEnrollmentId: { type: String, required: true },
  clientName: { type: String, required: true },
  clientEmail: { type: String, required: true },
  clientPhone: { type: String, required: true },
  reason: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", NotificationSchema);
