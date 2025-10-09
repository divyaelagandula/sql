const express = require('express');
const router = express.Router();
const controller=require('../controllers/expensecontroller')
router.post('/expenses',controller.addexpense);
router.get('/expenses',controller.getexpenses);
router.delete('/expenses/:id',controller.deleteexpense);
router.put('/expenses/:id',controller.updateexpense);

module.exports = router;    
