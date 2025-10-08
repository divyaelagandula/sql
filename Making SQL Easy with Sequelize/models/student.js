const { Sequelize, DataTypes } = require('sequelize');
const db=require('../utils/dbconnection')
const student=db.define('studenttable',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    }
})
module.exports=student