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