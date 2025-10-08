const express=require('express');
const router=express.Router();
const coursecontroller=require('../controllers/coursecontroller');
router.post('/addcourse',coursecontroller.addcourse);
router.get('/getcourses',coursecontroller.addstudentcourse);
module.exports=router;