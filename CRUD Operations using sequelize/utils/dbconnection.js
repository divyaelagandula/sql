const { Sequelize } = require('sequelize');



// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('newtest', 'root', 'Divhari1@', {
  host: 'localhost',
  dialect: 'mysql'
});
async function test(){
try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}
test()
module.exports=sequelize;
