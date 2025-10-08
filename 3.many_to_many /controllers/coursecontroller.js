const course=require('../models/course');  
const student=require('../models/student'); 
const addcourse=async(req,res)=>{
    try{
        const coursedata=await course.create(req.body);
        res.status(201).json({message:"Course added successfully",coursedata});
    }catch(error){
        console.error('Error adding course:', error);
        res.status(500).json({error:'Internal Server Error'});
    }
}
const addstudentcourse=async (req,res)=>{
    try{
        const {studentid,courseids}=req.body
        const studentdata=await student.findByPk(studentid);
        if(!studentdata){
            return res.status(404).json({error:"Student not found"});
        }
        const courses=await course.findAll({
            where:{
                id:courseids
            }
        });
        if(courses.length===0){
            return res.status(404).json({error:"Courses not found"});
        }
        await studentdata.addCourses(courses);
        const updatedstudent=await student.findByPk(studentid,{ include:course });
        res.status(200).json(updatedstudent);
    }catch(error){
        console.error('Error adding courses to student:', error);
        res.status(500).json({error:'Internal Server Error'});
    }
}
module.exports={
    addcourse,
    addstudentcourse
};