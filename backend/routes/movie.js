const express = require('express')
const router = require('express').Router()
const Movie = require("../models/Movie")

//Put movies.

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
            synopsis: req.body.synopsis,
            day: req.body.day,
            img: req.body.img,
            genre: req.body.genre,
            duration: req.body.duration
        })
        res.status(200).send({successful: "Good job"})
    }catch(error){
        res.status(500).send({error: "Internal server error"})
    }
})

//Get information about movies. 

router.get('/getmovies',
    async(req, res)=>{
        try {
            console.log("hello")
            const movies = await Movie.find()
           
            res.send(movies)
        } catch (error) {
            res.status(500).send("Internal server error")
        }
    }
)

module.exports = router