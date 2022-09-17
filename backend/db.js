const mongoose = require('mongoose')

const mongoURL = "mongodb+srv://utsavdesai:utsavdesai26@cluster0.v4tdf59.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURL, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;