const { bus } = require('../models/student');
const { Op } = require('sequelize'); // Required for filtering

const postentries = async (req, res) => {
    try {
        const { bus_number, arrivel_time, dep_time, num_seats_ava } = req.body;
        
        const result = await bus.create({ 
            bus_number: bus_number,
            arrivel_time: arrivel_time,
            dep_time: dep_time,
            num_seats_ava: num_seats_ava
        });
        
        res.status(201).send(`Bus details with the bus number ${bus_number} added successfully.`);
    } catch (err) {
        console.error("Error creating bus entry:", err.message);
        res.status(500).send("Unable to make an entry. Check server logs for details.");
    }
};

const getentries = async (req, res) => {
    try {
        const result = await bus.findAll();

        if (result.length === 0) {
            return res.status(404).send("No buses found in the database.");
        }
        
        res.status(200).send(result);
    } catch (err) {
        console.error("Error fetching bus entries:", err.message);
        res.status(500).send('Unable to get entries.');
    }
};

// Function for GET /buses/available/:seats
const getAvailableBuses = async (req, res) => {
    try {
        const minSeats = parseInt(req.params.seats, 10);

        if (isNaN(minSeats) || minSeats < 0) {
            return res.status(400).send("Invalid seat count provided. Must be a non-negative number.");
        }

        const result = await bus.findAll({
            where: {
                num_seats_ava: {
                    [Op.gt]: minSeats // Filter where seats available is > minSeats
                }
            }
        });

        if (result.length === 0) {
            return res.status(404).send(`No buses found with more than ${minSeats} available seats.`);
        }

        res.status(200).send(result);
    } catch (err) {
        console.error("Error fetching available buses:", err.message);
        res.status(500).send('Unable to retrieve available buses.');
    }
};


module.exports = {
    postentries,
    getentries,
    getAvailableBuses
};