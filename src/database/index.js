const Sequelize = require("sequelize");
const dbCoonfig = require("../config/database");

const connection = new Sequelize(dbCoonfig);

module.exports = connection;
