const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');


router.post('/create-reservation', reservationController.createReservations);
router.get('/get-reservations', reservationController.getReservations);
router.delete('/delete-reservation/:id', reservationController.deleteReservation);
router.get('/get-reservation/:id', reservationController.getReservation);


module.exports = router;