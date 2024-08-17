const express = require('express');
const connectToMongo = require('./db');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 5000;

connectToMongo();

console.log(process.env.EMAIL_USER)

// Middleware
app.use(cors());
app.use(express.json({ extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/movies', require('./routes/movie'));
app.use('/seats', require('./pdf'));

// Start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});