const connectToMongo = require('./Mongodb');
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.get('/',(req, res)=>{
res.send(`Hello from the server`)});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})