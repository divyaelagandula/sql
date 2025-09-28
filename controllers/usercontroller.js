const { user } = require('../models/student');

const postentries = async (req, res) => {
    try {
        const { username, email } = req.body;
        
        const result = await user.create({ 
            username: username,
            email: email
        });

        res.status(201).send(`User details with the username ${username} added successfully.`);
    } catch (err) { 
        console.error("Error creating user entry:", err.message); 
        res.status(500).send("Unable to make an entry. Check server logs for details.");
    }
}

const getentries = async (req, res) => {
    try {
        const result = await user.findAll();

        if (result.length === 0) {
            return res.status(404).send("No users found in the database."); 
        }

        res.status(200).send(result); 
    } catch (err) {
        console.error("Error fetching user entries:", err.message);
        res.status(500).send('Unable to get entries.');
    }
}

module.exports = {
    postentries,
    getentries
}