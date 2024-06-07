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
        type: Array, 
        "default": []
    },
    rating: {
        type: String, 
        required: true
    },
    synopsis:{
        type: String, 
        required: true
    },
    day: {
        type: Array, 
        "default": []
    },
    img: {
        type: String, 
        required: true
    }, 
    genre: {
        type: String, 
        required: true
    },
    duration: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model('movies', MovieSchema)
module.exports = Movie