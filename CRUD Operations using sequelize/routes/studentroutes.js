const express=require('express')
const routes=express.Router()
const studentcontroller=require('../controller/studentcontroller')
routes.post("/",studentcontroller.addentries)
routes.put("/:id",studentcontroller.updateentry)
routes.delete("/:id",studentcontroller.deleteentry)
routes.get("/",studentcontroller.getentries)
module.exports=routes;