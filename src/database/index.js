const Sequelize = require("sequelize");
const dbCoonfig = require("../config/database");
const Task = require("../model/Task");
const User = require("../model/User");

const connection = new Sequelize(dbCoonfig);

User.init(connection);
Task.init(connection);

module.exports = connection;
