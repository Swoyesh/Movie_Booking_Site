const router = require('express').Router();
const fetchUser = require('../middleware/fetchUser');
const Ticket = require("../models/Tickets");
const { body, validationResult } = require("express-validator");

// Save the seats selected.
router.post("/selectedseats", fetchUser, [
], async (req, res) => {
    try {
        const seat = await Ticket.create({
            paidSeat: req.body.paidSeat,
            formattedDate: req.body.date,
            time: req.body.time,
            title: req.body.title
        });
        res.status(201).json({ message: "Ticket created successfully", seatId: seat._id });
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get the seats selected.
router.post("/getseats", fetchUser,
    async(req, res)=>{
        try {
            const s_seats = await Ticket.find({title: req.body.title, formattedDate: req.body.formattedDate, time: req.body.time})
            const paidSeat = s_seats.map(seat => seat.paidSeat)
            res.send(paidSeat)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
)

module.exports = router;