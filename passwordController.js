const Notification = require("../models/Notification");

const Lawyer = require("../models/Lawyer");

exports.contactLawyer = async (req, res) => {
  try {
    const { clientName, clientEmail, clientPhone, reason, lawyerEnrollmentId } =
      req.body;

    const lawyer = await Lawyer.findOne({
      enrollmentId: lawyerEnrollmentId,
    });

    if (!lawyer) {
      return res.status(404).json({
        message: "Lawyer not found",
      });
    }

    const notification = new Notification({
      lawyerEnrollmentId,
      clientName,
      clientEmail,
      clientPhone,
      reason,
    });

    await notification.save();

    res.json({
      message: "Contact request sent successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find({
      lawyerEnrollmentId: req.params.enrollmentId,
      status: "Pending",
    });

    res.json(notifications);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.acceptNotification = async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, {
      status: "Accepted",
    });

    res.json({
      message: "Request accepted",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.rejectNotification = async (req, res) => {
  try {
    await Notification.findByIdAndUpdate(req.params.id, {
      status: "Rejected",
    });

    res.json({
      message: "Request rejected",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
