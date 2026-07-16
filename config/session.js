const session = require("express-session");

const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,

  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
  },
});

module.exports = sessionConfig;
