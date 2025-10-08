const express = require('express'); 
const sequelize=require('./utils/dbconnection');
require('./models/index');
require('./models/student');
require('./models/course');
require('./models/studentcourse');
const app = express();
const port = 3000;
app.use(express.json());
app.use('/student',require('./routes/studentroutes'));
app.use('/course',require('./routes/courseroutes'));
app.get('/', (req, res) => {
  res.send('Hello World!');
});
sequelize.sync({ alter: true }).then(() => {
  console.log('Database synchronized');
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
})
.catch((error) => {
  console.error('Error synchronizing database:', error);
});




