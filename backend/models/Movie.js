const mongoose = require('mongoose')
const {Schema} = mongoose

const MovieSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    time: {
        type: String, 
        required: true
    },
    seat: {
        type: String, 
        required: true
    }
})

const Movie = mongoose.model('movies', MovieSchema)
module.exports(Movie)