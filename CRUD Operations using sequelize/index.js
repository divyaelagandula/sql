const express = require("express");
const db = require('./utils/dbconnection');
const student = require('./models/student'); // Corrected variable name
const studentroutes = require('./routes/studentroutes');

const app = express();
app.use(express.json());
app.use("/students", studentroutes);

// Synchronize the database models before starting the server
db.sync({ force: true })
    .then(() => {
        // Only start the server if the database connection and sync are successful
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((err) => {
        console.error("Failed to connect or sync database:", err);
    });