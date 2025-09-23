const db=require('../utils/dbconnection')
const addentries=(req,res)=>{
    const {name,email,age}=req.body
    const postquery=`insert into studentman(NAME,EMAIL,AGE) values (?,?,?)`
    db.execute(postquery,[name,email,age],(err)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        console.log("details added sucesfully")
        res.status(200).send(`${name} detailes are added sucessfully`)
        
    })
}
const getentries=(req,res)=>{
    const getquery=`select * from studentman`
    db.execute(getquery,(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        console.log("feteching the values")
        res.status(200).json(result)
    })
}
const getentriesbyid=(req,res)=>{
    const id=req.params.id
    const getquery1=`select * from studentman where id=?`
    db.execute(getquery1,[id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        // Check if the result array is empty
        if (result.length === 0) {
        // No record was found with the given ID
            return res.status(404).send(`Student with ID ${id} not found.`);
        }

    res.status(200).json(result)
    })
}
const updatingentry=(req,res)=>{
    const id=req.params.id
    const {name}=req.body
    const updatequery=`update studentman set NAME=? where id=?`
    db.execute(updatequery,[name,id],(err)=>{
         if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }
        // Check the number of rows affected
        if (result.affectedRows === 0) {
            return res.status(404).send(`Student with ID ${id} not found.`);
        }
        res.status(200).send("updated sucesfully")
    })
}
const deleteentry = (req, res) => {
    const id = req.params.id;

    // Optional: Add a check to ensure ID is provided
    if (!id) {
        return res.status(400).send("ID is missing from the request.");
    }

    const deletequery = `delete from studentman where id = ?`;
    db.execute(deletequery, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        // Check the number of rows affected
        if (result.affectedRows === 0) {
            // No row was deleted, so the ID was not found
            return res.status(404).send(`Student with ID ${id} not found.`);
        }

        // A row was successfully deleted
        res.status(200).send(`Student with ID ${id} deleted successfully.`);
    });
};
module.exports={
    addentries,
    getentries,
    getentriesbyid,
    updatingentry,
    deleteentry
}


