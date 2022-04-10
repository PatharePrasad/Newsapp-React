const User = require('../models/User')

exports.register = async(req, res, next) => {
    const {name, email, password} = req.body
    
    try {
        const user = await User.create({
            name, email, password
        })
        sendToken(user, 201, res)
    } catch (error) {
        next(error)
    }
}

exports.login = async(req, res, next) => {
    const { email, password } = req.body

    if (!email || !password){
        return next(new ErrorResponse('Please provide email and password', 400))
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if(!user){
            return next(new ErrorResponse('User is not registered!', 401))
        }

        const isMatch = await user.matchPasswords(password)

        if(!isMatch){
            return next(new ErrorResponse('Password is incorrect!', 401))
        }

        sendToken(user, 200, res)
    } catch (error) {
        return next(new ErrorResponse(error.message, 500))
    }
}

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken()

    res.status(statusCode).json({
        success: true,
        token: token
    })
}
