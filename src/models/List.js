const { Model, DataTypes } = require("sequelize");

class List extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    this.hasMany(models.Task, {
      foreignKey: "list_id",
      as: "tasks",
    });
  }
}

module.exports = List;
