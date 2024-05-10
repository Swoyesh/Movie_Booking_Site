const express = require('express')
const router = require('express').Router();
const { body, validationResult } = require('express-validator')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const fetchUser = require('../middleware/fetchUser')

const JWT_secret = "firsttry"

//To create a user. No login required!!
router.post("/signup", [
  body("f_name", "Enter a valid first name").isLength({ min: 3 }),
  body("l_name", "Enter a valid last name").isLength({ min: 3 }),
  body("email", "Enter a valid email").isEmail(),
  body("mobile", "Enter a valid number").isInt(),
  body("password", "Password must be atleast 4 characters").isLength({
    min: 4,
  }),
  body("cpassword", "Password must be atleast 4 characters").isLength({min: 4}).custom((value, {req})=>{
    if(value !== req.body.password){
      throw new Error("Password does not match")
    }
  })
], async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array })
  }
  try {
    const { email, password } = req.body
    let user = await User.findOne({ email: req.body.email })
    if (user) {
      res.status(400).json({ error: "Email already exists!!" })
    }
    const salt = await bcrypt.genSalt(10)
    const secPass = await bcrypt.hash(password, salt)
    user = await User.create({
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      email: email,
      mobile: req.body.mobile,
      password: secPass,
      cpassword: secPass
    })
    const data = {
      users: {
        id: user.id
      }
    }
    console.log(data)
    const authToken = jwt.sign(data, JWT_secret)
    res.json({ authToken })
  } catch (error) {
    res.status(500).send({ error: "Internal server error!!" })
  }
})

//To authenticate a user. No login required!!

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array })
    }
    try {
      const user = await User.findOne({ email: req.body.email })
      const passwordComapre = await bcrypt.compare(req.body.password, user.password)
      if (!user || !passwordComapre) {
        res.status(400).json({ error: "Invalid login credentials!!" })
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_secret)
      res.json({ authToken })
    } catch (error) {
      res.status(500).send({ error: "Internal server error!!" })
    }
  }
)

//Get user information. Login required!!

router.post('/getuser', fetchUser, async (req, res) => {
  try {
    id = req.user.id
    const user = await User.findById(id)
    res.send(user)
  } catch (error) {
    res.status(500).send({ error: "Internal server error!!" })
  }
})

module.exports = router