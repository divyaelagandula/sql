const { Sequelize ,DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection')


const users = sequelize.define(
  'User',
  {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
    },
}
);
module.exports = users;