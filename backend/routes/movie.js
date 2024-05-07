const express = require('express')
const router = require('express').Router()
const Movie = require("../models/Movie")

//Get information about movie. Login required!!

router.post('/putmovies',
async(req, res)=>{
    try{
        let movie = await Movie.findOne({name: req.body.name})
        if(movie){
            return res.status(400).json({error: "Sorry Movie already inputted!!"})
        }
        movie = await Movie.create({
            name: req.body.name,
            time: req.body.time,
            rating: req.body.rating,
            details: req.body.detials,
            day: req.body.day
        })
        console.log("Hello")
        res.status(200).send({successful: "Good job"})
    }catch(error){
        res.status(500).send({error: "Internal server error"})
    }
})

module.exports = router