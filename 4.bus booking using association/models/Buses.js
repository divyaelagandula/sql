const { Sequelize ,DataTypes }  = require('sequelize');
const sequelize = require('../utils/db_connection')


const buses = sequelize.define(
  'Bus',
  {
    busno:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
   totalseats:{
        type:DataTypes.INTEGER,
        allowNull:false,

   },
    available_seats:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
}
);
module.exports = buses;