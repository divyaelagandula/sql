const { Sequelize ,DataTypes } = require('sequelize');
const sequelize = require('../utils/db_connection')


const bookings = sequelize.define('Booking',
  {
   seatno:{
        type:DataTypes.INTEGER,
        allowNull:false,
   }
}
);
module.exports = bookings;