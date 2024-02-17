const { default: mongoose } = require("mongoose")

const URI = "mongodb://localhost:27017/bigMovies"

const connetToMongo = async () => {
    try {
        mongoose.connect(URI)
        console.log("connected to mongo successfully!!")
    } catch (error) {
        console.log(error)
    }
}

mongoose.set('strictQuery', false)
module.exports = connetToMongo