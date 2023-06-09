const Reservation = require("../models/Reservations");

exports.createReservations = async(req, res) => {
    try {
        const {
            guestName,
            guestEmail,
            passportNumber,
            agentName,
            roomPlan,
            extraService,
            payment,
            roomNumber,
            checkInDate,
            checkOutDate,
            rate,
            notes,
        } = req.body;
        const reservation = new Reservation({
            guestName,
            guestEmail,
            passportNumber,
            agentName,
            roomPlan,
            extraService,
            payment,
            roomNumber,
            checkInDate,
            checkOutDate,
            rate,
            notes,
        });

        await reservation.save();
        res.status(200).json({ message: "Reservation created successfully", reservation });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
};

exports.getReservations = async(req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

exports.deleteReservation = async(req, res) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Reservation deleted successfully", reservation });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ message: "Internal server error" });
    }
}