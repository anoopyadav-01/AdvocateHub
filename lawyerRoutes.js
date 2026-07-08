const express = require("express");
const router = express.Router();

const {
  submitFeedback,
  getFeedbacks,
} = require("../controllers/feedbackController");

router.post("/submit-feedback", submitFeedback);

router.get("/get-feedbacks/:enrollmentId", getFeedbacks);

module.exports = router;
