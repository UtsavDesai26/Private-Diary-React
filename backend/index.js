const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors') 

connectToMongo();

const app = express()
const port = 8080

app.use(cors())

// passing json format data (req.body)
app.use(express.json())

// Available Routes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})