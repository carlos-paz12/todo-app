const bcrypt = require("bcrypt");
const User = require("../models/User");
const JWToken = require("../util/JWToken");

module.exports = {
  async show(req, res) {
    const { user_id } = req.params;

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

  async store(req, res) {
    const { username, password } = req.body;

    try {
      const passwordCrypted = bcrypt.hashSync(password, 12);

      const user = await User.create({
        username: username,
        password: passwordCrypted,
      });

      const token = JWToken.generate({
        userid: user.id,
      });

      res.status(200).json({
        created: true,
        auth: true,
        token: token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  },

  async auth(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({
        where: {
          username: username,
        },
      });

      if (!bcrypt.compareSync(password, user.password))
        return res.status(401).json({
          auth: false,
          token: null,
        });

      const token = JWToken.generate({
        userid: user.id,
      });

      res.status(200).json({
        auth: true,
        token: token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  },
};
