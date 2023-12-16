const Task = require("../models/Task");

module.exports = {
  async index(req, res) {
    const { user_id, list_id } = req.params;

    try {
      const tasks = Task.findAll({
        where: {
          list_id: list_id,
        },
      });
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
    const { user_id, list_id } = req.params;
    const { title, description, priority } = req.body;

    try {
      const task = await Task.create({
        user_id,
        list_id,
        title,
        description,
        priority,
      });

      res.status(201).json(task);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "INTERNAL_ERROR",
      });
    }
  },
};
