const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadMiddleware");

const {
  clientSignup,
  lawyerSignup,
  login,
  logout,
} = require("../controllers/authController");

router.post("/signup/client", upload.single("photo"), clientSignup);

router.post("/signup/lawyer", upload.single("photo"), lawyerSignup);

router.post("/login", login);

router.get("/logout", logout);

module.exports = router;
