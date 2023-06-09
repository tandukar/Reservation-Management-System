const mongoose = require("mongoose");

const reservationSchema = new mongoose.Schema({
    guestName: {
        type: String,
        required: true,
    },
    guestEmail: {
        type: String,
        required: true,
    },
    passportNumber: {
        type: String,
        required: true,
    },
    agentName: {
        type: String,
        // required: true,
    },
    roomPlan: {
        type: String,
        required: true,
    },
    extraService: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,
    },
    roomNumber: {
        type: String,
        required: true,
    },
    checkInDate: {
        type: Date,
        required: true,
    },
    checkOutDate: {
        type: Date,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    notes: {
        type: String,
        // required: true,
    },
});
const Reservation = mongoose.model("Reservations", reservationSchema);

module.exports = Reservation;