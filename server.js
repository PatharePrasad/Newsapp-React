require('dotenv').config({ path: './config.env' })

const express = require('express')
const connectDB = require('./config/db')

connectDB()

const app = express()
const PORT = process.env.PORT || 2022

const server = app.listen(PORT, () => console.log(`Server is running @${PORT}`))

process.on('unhandledRejection', (err) => {
    console.error(`Error:\n${err}`)
    server.close(() => process.exit(1))
})