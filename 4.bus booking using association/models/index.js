const buses=require('./Buses');
const users=require('./Users');
const bookings=require('./Bookings');

buses.hasMany(bookings,{ foreignKey: 'busId', as: 'bookings' });
bookings.belongsTo(buses,{ foreignKey: 'busId', as: 'bus' });

users.hasMany(bookings,{ foreignKey: 'userId', as: 'bookings' });
bookings.belongsTo(users,{ foreignKey: 'userId', as: 'user' });

module.exports={
    buses,
    users,
    bookings};