const express = require("express");
const router = express.Router();

const {
  pendingLawyers,
  approveLawyer,
  rejectLawyer,
  allLawyers,
  allClients,
} = require("../controllers/adminController");

router.get("/pending-lawyers", pendingLawyers);

router.put("/approve-lawyer/:lawyerId", approveLawyer);

router.post("/reject-lawyer/:id", rejectLawyer);

router.get("/all-lawyers", allLawyers);

router.get("/all-clients", allClients);

module.exports = router;
