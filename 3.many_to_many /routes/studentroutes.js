const express=require('express');
const router=express.Router();
const studentcontroller=require('../controllers/studentcontroller');
router.post('/addstudent',studentcontroller.addstudent);
module.exports=router;