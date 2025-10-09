const express = require('express');
const db=require('./utils/db_connection');
require('./models/Bookings')
require('./models/Users')
require('./models/Buses')
require('./models/index')
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/', require('./routes/routes'));
db.sync({ alter: true })
  .then(() => {
    console.log('Database synchronized successfully.');
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error synchronizing database:', error);
  });       