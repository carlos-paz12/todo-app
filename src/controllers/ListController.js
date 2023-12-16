const List = require("../models/List");

module.exports = {
  async index(req, res) {
    const { user_id } = req.params;

    try {
      const lists = await List.findAll({
        where: {
          user_id: user_id,
        },
      });

      res.status(201).json(lists);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "INTERNAL_ERROR",
      });
    }
  },

  async show(req, res) {
    /**
     * TODO
     */
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name, description } = req.body;

    try {
      const list = await List.create({
        user_id,
        name,
        description,
      });

      res.status(201).json(list);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "INTERNAL_ERROR",
      });
    }
  },
};
