const student=require('../models/student');
const addstudent=async(req,res)=>{
    try{
        const studentdata=await student.create(req.body);
        res.status(201).json({message:"Student added successfully",studentdata});
    }catch(error){
        console.error('Error adding student:', error);
        res.status(500).json({error:'Internal Server Error'});
    }
}
module.exports={
    addstudent
};