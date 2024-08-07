const prompt = require('prompt-sync')()

let start = prompt('Enter start number: ')
let end = prompt('Enter end number: ')

//function to check if number is prime
function checkPrime(num) {
  let c=0
  for(i=2; i<num; i++) {
    if(num%i==0)
      c++
  }
  if(c)
    return false
  else
    return true
}

//function to get divisors of composite numbers
function getDivisors(num) {
  let divisors = []
  for(let i=1; i<=num; i++) {
    if(num%i==0)
      divisors.push(i)
  }
  return divisors
}

//function to get object containing numbers in range as keys
function getObject(start, end) {
  let obj={}

  //adding keys and values to object by bracket notation
  for(let i=parseInt(start); i<end; i++) {
    if(checkPrime(i))
      obj[i] = i.toString(2)
    else
      obj[i] = getDivisors(i)
  }
  return obj
}

console.log(getObject(start, end))