const router = require('express').Router();
const fetchUser = require('../middleware/fetchUser');
const Ticket = require("../models/Tickets");
const { body, validationResult } = require("express-validator");

// Save the seats selected.
router.put("/selectedseats", fetchUser, [
    body("seats", "At least one seat must be selected"),
    body("total", "Total must be a non-empty integer").notEmpty().isInt()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const seat = await Ticket.create({
            user: req.user.id,
            seats: req.body.seats,
            total: req.body.total
        });
        res.status(201).json({ message: "Ticket created successfully", seatId: seat._id });
    } catch (error) {
        console.error("Error creating ticket:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Get the seats selected.
router.get("/getseats", fetchUser,
    async(req, res)=>{
        try {
            const s_seats = await Ticket.find()
            console.log(s_seats)
            res.send(s_seats)
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    }
)

module.exports = router;