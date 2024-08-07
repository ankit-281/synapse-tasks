const mongoose = require('mongoose')

//creating database schema
const bookSchema = new mongoose.Schema({
    name: String,
    genre: String,
    author: String,
    availability: String
})

//exporting schema
module.exports = mongoose.model('Book', bookSchema)