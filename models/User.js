const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        match: [/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                'Email invalid'],
        trim: true,
        unique: [true, 'Email Already Exists']
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
    }
},
    {
        resetPasswordToken: String,
        resetPasswordExpire: Date,
        timestamps: true
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('password')){ next() }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

    next()
})

userSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.getSignedToken = function(){
    return jwt.sign({ id: this._id}, process.env.JWT_SECRET,
        {expiresIn: process.env.JWT_EXPIRE})
}

userSchema.methods.getResetPasswordToken = function(){
    const resetToken = crypto.randomBytes(20).toString('hex')
    this.resetPasswordTaken = crypto.createHash('sha256').update(resetToken).digest('hex')
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000)

    return resetToken
}

module.exports = mongoose.model("Users", userSchema)
