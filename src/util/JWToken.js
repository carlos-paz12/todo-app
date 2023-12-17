require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;
const expiration = process.env.JWT_EXPIRATION;

module.exports = {
  generateJwt(payload = {}) {
    return jwt.sign(payload, secret, {
      expiresIn: expiration,
    });
  },

  verifyJwt(token) {
    return jwt.verify(token, secret);
  },
};
