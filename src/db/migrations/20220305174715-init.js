'use strict';
const { DataTypes } = require('sequelize');
const { USER_TABLE } = require('./../models/user.js');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(USER_TABLE, {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      names: {
          allowNull: false,
          type: DataTypes.STRING
      },
      lastnames: {
          allowNull: false,
          type: DataTypes.STRING
      },
      username: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true
      },
      email: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: true
      },
      password: {
          allowNull: false,
          type: DataTypes.STRING,
      },
      recovery: {
          allowNull: true,
          type: DataTypes.STRING,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
  }
};
