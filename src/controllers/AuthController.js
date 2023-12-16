const bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = {
  async auth(req, res) {
    const { username, password } = req.params;

    try {
      const user = await User.findByPk(user_id, {
        attributes: { exclude: ["password"] },
      });

      res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "INTERNAL_ERROR",
      });
    }
  },
};
