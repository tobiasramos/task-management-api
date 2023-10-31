const Sequelize = require("sequelize");
const dbCoonfig = require("../config/database");
const Task = require("../model/Task");

const connection = new Sequelize(dbCoonfig);

Task.init(connection);

module.exports = connection;
