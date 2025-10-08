const express = require('express');
const db = require('./utils/dbconnection');
const models = require('./models/student'); 
const usersroutes = require('./routes/usersroutes');
const busesroutes = require('./routes/busesroutes');

const app = express();

app.use(express.json());
app.use("/users", usersroutes);
app.use("/buses", busesroutes);

// Function to insert sample data
const insertSampleData = async ({ user, bus }) => {
    try {
        console.log("Inserting sample data...");
        
        await user.bulkCreate([
            { username: 'divyaela', email: 'divya@example.com' },
            { username: 'john_doe', email: 'john@example.com' },
            { username: 'jane_smith', email: 'jane@example.com' },
        ], { ignoreDuplicates: true }); 

        await bus.bulkCreate([
            { bus_number: 'BUS001', arrivel_time: '08:00:00', dep_time: '12:00:00', num_seats_ava: 5 },
            { bus_number: 'BUS002', arrivel_time: '10:30:00', dep_time: '14:30:00', num_seats_ava: 15 },
            { bus_number: 'BUS003', arrivel_time: '14:00:00', dep_time: '18:00:00', num_seats_ava: 25 },
        ], { ignoreDuplicates: true });
        
        console.log("Sample data inserted successfully.");
    } catch (error) {
        console.error("Error inserting sample data:", error.message);
    }
};

// Sync the database and start the server
db.sync({ force: true }) // WARNING: force: true DROPS all tables on every start
.then(() => {
    // 1. Insert Sample Data after successful sync
    return insertSampleData(models); 
})
.then(() => {
    // 2. Start the server
    app.listen(3000, () => {
        console.log("Server is running on port number 3000");
    });
})
.catch((err) => {
    // Log the actual error for debugging!
    console.error("Database sync or server startup failed:", err);
    console.log("Server failed to start.");
});