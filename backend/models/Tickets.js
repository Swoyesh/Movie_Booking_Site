const mongoose = require('mongoose')
const {Schema} = mongoose

const ticketSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    seats: {
        type: Array,
        "default": []
    },
    total: {
        type: Number,
        required: true
    }
})

const Tickets = mongoose.model("tickets", ticketSchema)
module.exports = Tickets