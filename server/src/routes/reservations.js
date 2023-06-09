const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');


router.post('/create-reservation', reservationController.createReservations);
router.get('/get-reservation', reservationController.getReservations);
router.delete('/delete-reservation/:id', reservationController.deleteReservation);


module.exports = router;