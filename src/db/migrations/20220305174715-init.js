'use strict';
const { DataTypes } = require('sequelize');
const { ADMIN_TABLE } = require('../models/admin.js');
const { CUSTOMER_TABLE } = require('../models/customer.js');
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'create_at',
        defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable(CUSTOMER_TABLE, {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false
      },
      lastname: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false
      },
      country: {
          allowNull: true,
          type: DataTypes.STRING,
          unique: false
      },
      birthday: {
          allowNull: true,
          type: DataTypes.DATE,
          unique: false
      },
      userId: {
          field: 'user_id',
          allowNull: false,
          type: DataTypes.INTEGER,
          unique: true,
          references: {
              model: USER_TABLE,
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      },
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'create_at',
          defaultValue: Sequelize.NOW
      }
    })
    await queryInterface.createTable(ADMIN_TABLE, {
      id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
      },
      name: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false
      },
      lastname: {
          allowNull: false,
          type: DataTypes.STRING,
          unique: false
      },
      userId: {
          field: 'user_id',
          allowNull: false,
          type: DataTypes.INTEGER,
          unique: true,
          references: {
              model: USER_TABLE,
              key: 'id'
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL'
      },
      createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
          field: 'create_at',
          defaultValue: Sequelize.NOW
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(ADMIN_TABLE);
  }
};
