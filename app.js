require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");
const session = require("express-session");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const clientRoutes = require("./routes/clientRoutes");
const lawyerRoutes = require("./routes/lawyerRoutes");
const adminRoutes = require("./routes/adminRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const passwordRoutes = require("./routes/passwordRoutes.js");
const emailRoutes = require("./routes/emailRouter");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,

    cookie: {
      secure: false,
      maxAge: 3600000,
    },
  }),
);

app.use(express.static(path.join(__dirname, "public")));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "homepgtesting.html"));
});

/* Routes */

app.use("/api", authRoutes);

app.use("/", clientRoutes);

app.use("/api/lawyer", lawyerRoutes);

app.use("/api", feedbackRoutes);

app.use("/api", notificationRoutes);

app.use("/api/admin", adminRoutes);

app.use("/", passwordRoutes);

app.use("/api", emailRoutes);

module.exports = app;
