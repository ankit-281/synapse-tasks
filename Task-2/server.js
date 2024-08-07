const express = require('express')
const bodyParser = require('body-parser')
const app=express();

//making middleware to parse request body
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req,res)=> {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const specialCharacters = '!@#$%^&*()_+[]{}|;`~:,.<>?"-\/'
  const capitalAlphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  let characters = lowercase;
  //adding characters based on conditions given by user
  if (req.body.numbers==='true') characters += numbers;
  if (req.body.specialCharacters==='true') characters += specialCharacters;
  if (req.body.capitalAlphabets==='true') characters += capitalAlphabets;

  //creating randomized password
  let password=''
  for(let i=0; i<req.body.length; i++)
    password+=characters[Math.floor(Math.random()*characters.length)]

  //sending json response
  try {
    res.status(200).json(
      {
        password,
        length: req.body.length
      }
    )
  } catch(e) {
    res.status(500).json(e)
  }
})

app.listen(3000,()=> {
  console.log('listening on port 3000')
})