const db = require('../utils/dbconnection')
const adduserentries = (req, res) => {
    const {
        username,
        email
    } = req.body
    const addquery = `insert into users(USERNAME,EMAIL) values (?,?)`
    db.execute(addquery, [username, email], (err) => {
        if (err) {
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        console.log("inserted successfully")
        res.status(200).send(`${username} & ${email} added successfully`)
    })
}
const getuserentries = (req, res) => {
    const getquery=`select * from users`
    db.execute(getquery,(err,rows)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        console.log("retrived succesfully")
        res.status(200).json(rows)
    })
}
module.exports = {
    adduserentries,
    getuserentries
}
