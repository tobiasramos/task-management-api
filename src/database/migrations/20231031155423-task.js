"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("task", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          max: 50,
          min: 5,
        },
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          min: 10,
        },
      },
    });
  },

  async down(queryInterface, Sequelize) {},
};
