const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Book=require('./Book.js')
const env=require('dotenv')

const app=express();
env.config()

const port = process.env.SERVER_PORT

//connecting to database server
mongoose.connect(process.env.DATABASE_URL)
  .then(()=> console.log('Connected to MongoDB'))
  .catch(e=> console.log(e))

//making middleware to parse request body
app.use(bodyParser.urlencoded({extended: true}))

//GET request to get books of the same author
app.get('/books/author/:author', async (req, res)=> {
  const books = await Book.find({author: req.params.author});
  res.json(books);
})

//GET request to get books of the same genre
app.get('/books/genre/:genre', async (req, res)=> {
  const books = await Book.find({genre: req.params.genre});
  res.json(books);
})

//POST request to get books
app.post('/books', async (req,res)=> {
  try {
    const newBook = await Book.create(req.body)
    const response = await newBook.save();
    res.status(201).json(response)
  } catch(e) {
    res.status(400).json(e)
  }
});

//GET request to get all books
app.get('/books', async (req,res)=> {
  try {
    const books = await Book.find();
    res.json(books);
  } catch(e) {
    req.status(500).json(e)
  }
})

//connecting to online server
app.listen(port,()=> console.log('listening on port'))