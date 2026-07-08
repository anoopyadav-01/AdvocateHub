const express = require("express");
const router = express.Router();

const {
  getAllLawyers,
  getLawyerData,
  updateLawyerData,
} = require("../controllers/lawyerController");

const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/", getAllLawyers);

router.get("/get-lawyerdata", isAuthenticated, getLawyerData);

router.post("/update-lawyerdata", isAuthenticated, updateLawyerData);

module.exports = router;
