const db=require('../utils/dbconnection')
const addentries=(req,res)=>{
    const {name,email}=req.body
    const insertionquery=`INSERT INTO students(name,email) VALUES(?,?)`
    db.execute(insertionquery,[name,email],(err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return;
        }
        console.log("value has been inserted")
        res.status(200).send(`student with ${name} sucessfully added`)
    })
}
const updateentries=(req,res)=>{
const {id}=req.params
const {name}=req.body
const upadatequery=`update students set name=? where id=?`
db.execute(upadatequery,[name,id],(err,result)=>{
    if(err){
        console.log(err.message)
            res.status(500).send(err.message)
            return;
    }
    if(result.affectedRows===0){
        res.status(404).send('student not found')
        return
    }
    res.status(200).send("user has updated")
})
}
const deleteentries=(req,res)=>{
    const {id}=req.params
    const deletequery=`delete from students where id=?`;
    db.execute(deletequery,[id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return 
        }
        if(result.affectedRows===0){
            res.status(404).send("student not found")
            return
        }
        res.status(200).send(`student details deleted with id ${id}`)
    })

}
module.exports={
    addentries,
    updateentries,deleteentries
}