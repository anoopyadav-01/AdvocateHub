const express = require("express");
const router = express.Router();

const {
  getClientData,
  updateClientData,
} = require("../controllers/clientController");

const { isAuthenticated } = require("../middleware/authMiddleware");

router.get("/get-clientdata", isAuthenticated, getClientData);

router.post("/update-clientdata", isAuthenticated, updateClientData);

module.exports = router;
