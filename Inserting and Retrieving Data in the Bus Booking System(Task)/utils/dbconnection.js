
const mysql = require("mysql2")
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Divhari1@",
    database: "busdb"
})
connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("connection established successfully")
    const userstablequery = `create table if not exists users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    USERNAME VARCHAR(30) NOT NULL,
    EMAIL VARCHAR(30) NOT NULL
    )`
    connection.execute(userstablequery, (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("users table is created")
    })
    const busestablequery = `create table if not exists buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    BUSNUMBER INT NOT NULL,
    ARRIVELTIME TIME NOT NULL,
    DEPARTURETIME TIME NOT NULL,
    NUM_SEATS_AVAILABLE INT NOT NULL
    )`
    connection.execute(busestablequery, (err) => {
        if (err) {
            console.log(err)
            return
        }
        console.log("buses table is created")
    })
})
module.exports = connection;
