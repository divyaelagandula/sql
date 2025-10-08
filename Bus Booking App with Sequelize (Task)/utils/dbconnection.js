const { Sequelize } = require('sequelize');

// !!! IMPORTANT: Replace 'aadhya', 'root', and 'Divhari1@' with your actual database credentials.
const sequelize = new Sequelize('aadhya', 'root', 'Divhari1@', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

async function testConnection() {
 try {
  await sequelize.authenticate();
  console.log('Database connection established successfully.');
} catch (error) {
  console.error('ERROR: Unable to connect to the database:', error.message);
} 
}
testConnection();

module.exports = sequelize;