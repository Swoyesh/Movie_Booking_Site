const express = require('express')
const router = require('express').Router()
const fetchUser = require('../middleware/fetchUser')

//Get information about movie. Login required!!

router.post('/getinfo', fetchUser, (req, res)=>{
    const obj = {
        name: "Dunki",
        time: "8:45 PM",
        seat: "F12"
    }
    res.json(obj)
})

module.exports = router