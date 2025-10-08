const express=require("express")
const routes=express.Router()
const studentcontroller=require('../controllers/studentcontroller')
routes.post("/",studentcontroller.addentries)
routes.get("/",studentcontroller.getentries)
routes.get("/:id",studentcontroller.getentriesbyid)
routes.put("/:id",studentcontroller.updatingentry)
routes.delete("/:id",studentcontroller.deleteentry)
module.exports=routes