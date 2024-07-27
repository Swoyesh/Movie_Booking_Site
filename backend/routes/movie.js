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
            v_img: req.body.v_img,
            h_img: req.body.h_img,
            genre: req.body.genre,
            duration: req.body.duration,
            director: req.body.director,
            cast: req.body.cast,
            release: req.body.release
        })
        console.log("hello")
        res.status(200).send({successful: "Good job"})
    }catch(error){
        res.status(500).send({error: "Internal server error"})
    }
})

//Get information about movies. 

router.get('/getmovies',
    async(req, res)=>{
        try {
            const movies = await Movie.find()
            res.send(movies)
        } catch (error) {
            res.status(500).send("Internal server error")
        }
    }
)

module.exports = router