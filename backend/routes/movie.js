const express = require('express')
const router = require('express').Router()
const fetchUser = require('../middleware/fetchUser')

//Get information about movie. Login required!!

router.post('/getinfo', fetchUser, (req, res)=>{
    
})

module.exports = router