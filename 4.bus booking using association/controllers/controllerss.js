const Users = require('../models/Users');
const Buses = require('../models/Buses');
const Bookings = require('../models/Bookings');
const adduser=async(req,res)=>{
    try{
 const userdata=await Users.create(req.body);
    res.json(userdata);
    }catch(error){
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
   

}
const addbus=async(req,res)=>{
    try{
        const busdata=await Buses.create(req.body);
        res.json(busdata);
    }catch(error){
        console.error('Error creating bus:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
    
}
const addbooking=async(req,res)=>{
    try{
        const bookingdata=await Bookings.create(req.body);
        res.json(bookingdata);
    }catch(error){
        console.error('Error creating booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const userbookingdetails=async(req,res)=>{
    try{
        const userid=req.params.id;
        const userwithbookings=await Users.findByPk(userid,{
            attributes:[],
            include:[{
                model:Bookings,
                as:'bookings',
                attributes:['id','seatno'],
                include:[{
                    model:Buses,
                    as:'bus',
                    attributes:['busno']
                }]
            }]
        });
        if(!userwithbookings){
            return res.status(404).json({error:'User not found'});
        }
        res.json(userwithbookings);
    }catch(error){
        console.error('Error fetching user booking details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }

}
const busbookingdetails=async(req,res)=>{
    const busid=req.params.id;
    try{
        const buswithbookings=await Buses.findByPk(busid,{
            attributes:[],
            include:[{
                model:Bookings,
                as:'bookings',
                attributes:['id','seatno'],
                include:[{
                    model:Users,
                    as:'user',
                    attributes:['name','email']
                }]
            }]
        });
        if(!buswithbookings){
            return res.status(404).json({error:'Bus not found'});
        }
        res.json(buswithbookings);
    }catch(error){
        console.error('Error fetching bus booking details:', error);
        res.status(500).json({ error: 'Internal server error' });
    }   

}
module.exports={adduser,addbus,addbooking,userbookingdetails,busbookingdetails};