const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllerss');
router.post('/users',controllers.adduser);
router.post('/buses',controllers.addbus);
router.post('/bookings',controllers.addbooking);
router.get('/users/:id/bookings',controllers.userbookingdetails);
router.get('/buses/:id/bookings',controllers.busbookingdetails);
module.exports = router;