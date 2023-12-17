require("dotenv").config();
const JWToken = require("../util/JWToken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decoded = JWToken.verifyJwt(token);
    req.body.user_id = decoded.user_id;
    next();
  } catch (error) {
    return res.status(401).json({
      auth: false,
      message: error.message,
    });
  }
};
