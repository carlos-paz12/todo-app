require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports = {
  generate(payload = {}) {
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  },
};
