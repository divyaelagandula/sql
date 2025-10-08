const { Sequelize, DataTypes } = require('sequelize');

sequelize = require('../utils/dbconnection');
const course = sequelize.define(
  'Course',
  {
    id:{
        type: DataTypes.INTEGER,    
        autoIncrement: true,
        primaryKey: true,
    },
    nameofcourse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
);
module.exports = course;