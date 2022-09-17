const mongooes = require('mongoose')
const { Schema } = mongooes;

const NotesSchema = new Schema({
    user:{
        type: mongooes.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
    },
    tag:{
        type: String,
        default: "General"
    },
    date:{
        type: Date,
        default: Date.now
    }
})

const User = mongooes.model('notes',NotesSchema)
module.exports = User  