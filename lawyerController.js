const Feedback = require("../models/Feedback");
const Lawyer = require("../models/Lawyer");

exports.submitFeedback = async (req, res) => {
  try {
    const { lawyerId, feedback, clientName, clientPhoto, createdAt } = req.body;

    const lawyer = await Lawyer.findById(lawyerId);

    if (!lawyer) {
      return res.status(404).json({
        message: "Lawyer not found",
      });
    }

    const newFeedback = new Feedback({
      lawyerId,
      enrollmentId: lawyer.enrollmentId,
      feedback,
      clientName,
      clientPhoto,
      createdAt: createdAt || new Date(),
    });

    await newFeedback.save();

    res.status(201).json({
      message: "Feedback saved successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

exports.getFeedbacks = async (req, res) => {
  try {
    const { enrollmentId } = req.params;

    const feedbacks = await Feedback.find({
      enrollmentId,
    });

    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};
