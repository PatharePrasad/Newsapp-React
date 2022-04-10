const mongoose = require('mongoose')
const { info, error } = require('./logging')

const NAMESPACE = "MONGODB_CONNECTION"
const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(info(NAMESPACE, "Database connected successfully"))
    .catch(err => error(NAMESPACE, err.msg, err))
}

module.exports = connectDB