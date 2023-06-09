const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.post('/create-reservation', reservationController.createReservations);


module.exports = router;