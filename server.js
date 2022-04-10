require('dotenv').config({ path: './config.env' })

const express = require('express')
const connectDB = require('./config/db')
const bodyParser = require('body-parser')
const logging = require('./config/logging')

connectDB()

const NAMESPACE = 'SERVER'
const app = express()
const PORT = process.env.PORT || 2022

app.use((req, res, next) => {
    logging.info(NAMESPACE, `METHOD: [${req.method}],  URL - [${req.url}], IP - [${req.socket.remoteAddress}]`)

    res.on('finish', () => {
        logging.info(NAMESPACE, `METHOD - [${req.method}], URL - [${req.url}], IP - [${req.socket.remoteAddress}], STATUS - [${res.statusCode}]`)
    })

    next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', process.env.CLIENT_URL)
    res.header('Access-Control-Allow-Headers', 
            'Origin, X-Requested-With, Content-Type, Accept, Authorization')

    if(req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 
            'GET POST')
        return res.status(200).json({})
    }

    next()
})

app.use('/auth', require('./routes/auth'))

const server = app.listen(PORT, () => logging.info(NAMESPACE, `Server is running @${PORT}`))

process.on('unhandledRejection', (err) => {
    logging.error(NAMESPACE, 'Server Error' + err.msg, err)
    server.close(() => process.exit(1))
})