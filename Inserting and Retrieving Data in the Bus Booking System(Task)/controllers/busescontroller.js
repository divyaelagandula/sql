const db=require('../utils/dbconnection')
const addbuses=(req,res)=>{
const {
        bus_num,arr_time,dep_time,num_seats_ava
    } = req.body
     // Basic input validation.num_seats_ava we are comparing with undefined bcz 
     // if 0 number of seats aavailaable .!(num_seats_ava) as true so in this particular 
     //condition comparing with undefined.falsy values are 0,NULL,"",undefined
    if (!bus_num || !arr_time || !dep_time || num_seats_ava === undefined) {
        return res.status(400).send('Missing required bus information.');
    }
    const addquery = `insert into buses(BUSNUMBER,ARRIVELTIME,DEPARTURETIME,NUM_SEATS_AVAILABLE) values (?,?,?,?)`
    db.execute(addquery, [bus_num,arr_time,dep_time,num_seats_ava], (err) => {
        if (err) {
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        console.log("inserted successfully")
        res.status(200).send(`${bus_num}  added successfully`)
    })
}
const retrivebuses=(req,res)=>{
    const seats=req.params.seats
    const retrivequery=`select * from buses where NUM_SEATS_AVAILABLE>?`
    db.execute(retrivequery,[seats],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        console.log("retrived succesfully")
        res.status(200).json(result)

    })
}
module.exports={
    addbuses,
    retrivebuses
}