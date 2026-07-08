const express = require("express");
const router = express.Router();

const {
  contactLawyer,
  getNotifications,
  acceptNotification,
  rejectNotification,
} = require("../controllers/notificationController");

router.post("/contact-lawyer", contactLawyer);

router.get("/lawyer/notifications/:enrollmentId", getNotifications);

router.put("/notifications/accept/:id", acceptNotification);

router.put("/notifications/reject/:id", rejectNotification);

module.exports = router;
