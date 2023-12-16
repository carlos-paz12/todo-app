"use strict";

/**
 * @type {import('sequelize-cli').Migration}
 */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("tasks", {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      list_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "lists",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      priority: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("tasks");
  },
};
