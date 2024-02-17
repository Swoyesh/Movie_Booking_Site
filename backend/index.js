const express = require('express')
const connectToMongo = require("./db")
const app = express()
let cors = require('cors')

connectToMongo()
const port = 5000

app.use(cors())

//Route for authentication.
app.use(express.json({extended: true}))
app.use("/api/auth", require("./routes/auth"))

//Route for notes.
app.use(express.json())
app.use("/api/movies", require("./routes/movie"))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
