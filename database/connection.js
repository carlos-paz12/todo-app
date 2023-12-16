const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const con = new Sequelize(dbConfig);

/* MODELS */
const User = require("../src/models/User");
const List = require("../src/models/List");
const Task = require("../src/models/Task");

/* INITIALIZE MODELS */
User.init(con);
List.init(con);
Task.init(con);

User.associate(con.models);
List.associate(con.models);
Task.associate(con.models);

module.exports = con;
