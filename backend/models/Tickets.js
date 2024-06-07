const mongoose = require('mongoose')
const {Schema} = mongoose

const ticketSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "users"
    },
    seats: {
        type: [String],
        required: true
    },
    total: {
        type: Number,
        required: true
    }
})

const Tickets = mongoose.model("tickets", ticketSchema)
module.exports = Tickets