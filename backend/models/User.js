const mongoose = require('mongoose')
const {Schema} = mongoose

const UserSchema = new Schema({
    f_name:{
        type: String,
        required: true
    },
    l_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    cpassword:{
        type: String,
        required: true
    }
})

const User = mongoose.model('users', UserSchema)
module.exports = User