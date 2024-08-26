const express = require('express')
const router = require('express').Router();
const { body, validationResult, ExpressValidator } = require('express-validator')
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
  body("mobile", "Enter a valid number").isLength({min: 10}),
  body("password", "Password must be at least 4 characters").isLength({ min: 4 }),
  body("cpassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  })
], async (req, res) => {
  let success = false
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({success, errors: errors.array() });
  }

  try {
    // Check if email already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({success, error: "Email already exists!!" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);
    // Create user
    user = await User.create({
      f_name: req.body.f_name,
      l_name: req.body.l_name,
      email: req.body.email,
      mobile: req.body.mobile,
      password: secPass,
      cpassword: secPass
    });
    success = true
    res.json({success});
  } catch (error) {
    res.status(500).send({success, error: "Internal server error!!" });
  }
});

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
    let success = false
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array })
    }
    try {``
      const user = await User.findOne({ email: req.body.email })
      const passwordComapre = await bcrypt.compare(req.body.password, user.password)
      if (!user || !passwordComapre) {
        return res.status(400).json({ error: "Invalid login credentials!!" })
      }
      const data = {
        user: {
          id: user.id
        }
      }
      const authToken = jwt.sign(data, JWT_secret, { expiresIn: '24hr' })
      success = true
      return res.json({success, authToken })
    } catch (error) {
      return res.status(500).send({success, error: "Internal server error!!" })
    }
  }
)

//Get user information. Login required!!

router.post('/getuser', fetchUser, async (req, res) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(400).send({ error: "Invalid user authentication" });
    }

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    res.send(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).send({ error: "Internal server error!!" });
  }
});

module.exports = router