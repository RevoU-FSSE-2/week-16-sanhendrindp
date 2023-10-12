const rateLimit = require("express-rate-limit");

const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minutes
  max: 5,
  message: "Too many login attemps. Please try again later.",
});

module.exports = loginLimiter;
