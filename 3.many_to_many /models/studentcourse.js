const { Sequelize, DataTypes } = require('sequelize');

sequelize = require('../utils/dbconnection');
const studentcourse = sequelize.define(
  'StudentCourse',
  {
    id:{
        type: DataTypes.INTEGER,    
        autoIncrement: true,
        primaryKey: true,
    },
}
);
module.exports = studentcourse;