const { DataTypes } = require('sequelize');
const sequelize = require('../utils/dbconnection');

// 1. User Model
const user = sequelize.define(
  'users',
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
  },
  {
    tableName: 'users',
    timestamps: false
  }
);

// 2. Bus Model
const bus = sequelize.define(
  'buses',
  {
     id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    bus_number: {
      type: DataTypes.STRING,
      unique: true,
      allowNull:  false,
    },
    arrivel_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    dep_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    num_seats_ava: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },
  {
    tableName: 'buses',
    timestamps: false
  }
);

module.exports = {
    user,
    bus
};