const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
        unique: true
    },
    confpassword: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true,
        unique: true
    },
    
})

 const User = mongoose.model("User", userSchema) 
 module.exports=User;