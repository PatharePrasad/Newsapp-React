const mongoose = require('mongoose');
const mongoURI ="mongodb+srv://Prasad_pathare:prasad103@cluster0.8w9bl.mongodb.net/NEWSAPP.News24?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, () => {
        console.log("Connected to Mongo Successfully");
    })
}
module.exports = connectToMongo;