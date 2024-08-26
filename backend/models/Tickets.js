const mongoose = require('mongoose')
const {Schema} = mongoose

const TicketsSchema = new Schema({
    paidSeat: {
        type: Array,
        "default": [],
        required: true
    },
    formattedDate: {
        type: String,
        required: true
    },
    time: {
        type: Array,
        "default": [],
        required: true
    },
    title: {
        type: String,
        required: true
    }
})

const Tickets = mongoose.model('tickets', TicketsSchema)
module.exports = Tickets