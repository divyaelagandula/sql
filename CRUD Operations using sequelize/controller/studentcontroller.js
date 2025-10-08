const db=require('../utils/dbconnection');
const student=require('../models/student');
const addentries=async (req,res)=>{
    try{
        const {name,email}=req.body
    const result=await student.create({
    name:name,
    email:email

    })
    res.status(201).send(`user details with the ${name} details added sucesfully`)
    }catch(err){
    res.status(500).send('unble to make an entry')
    }
}
const updateentry=async (req,res)=>{
    try{
        const {id}=req.params
        const {name}=req.body
        const result=await student.findByPk(id);
    if (!result) {
     return res.status(404).send('Not found!')
    }
    result.name=name

    await result.save();
    res.status(200).send("user has been updated")

    }catch(err){
        res.status(500).send("user cannot be updated")

    }
}
const deleteentry=async (req,res)=>{
    try{
        const {id}=req.params
        const result=await student.destroy({
            where:{
                id:id
            }
        })
        if(result===0){
            return res.status(404).send("user not found")
        }
        res.status(200).send("user is delted")
    }
    catch(error){
        console.log(error)
        res.status(500).send("error encouting while deletting")
    }
}
const getentries=async (req,res)=>{
    try{
const users = await student.findAll();
res.status(200).send(JSON.stringify(users))
    }
catch(err){
    res.status(500).send('unble to get entries')
    }
}

module.exports={
    addentries,
deleteentry,
    updateentry,
    getentries
}

