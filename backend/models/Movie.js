const { type } = require('@testing-library/user-event/dist/type')
const mongoose = require('mongoose')
const { link } = require('../routes/movie')
const { Link } = require('react-router-dom')
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
    }, 
    rating: {
        type: String, 
        required: true
    },
    details: {
        type: String,
        required: true
    },
    day: {
        type: Date,
        required: true
    }
})

const Movie = mongoose.model('movies', MovieSchema)
module.exports(Movie)