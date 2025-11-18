const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey2

// run your code with node api.js
// add your apiKey to .env if your API needs one, otherwise ignore
// Follow the checklist on the Performance Assessment Google Doc


async function getCatPic(request){
const response = await fetch(request)
const data = await response.json()
console.log(data[0].url)
return data
}
console.log("Welcome to the Cat API!")
let limit = prompt("Type the amount of cat pics you want to see (1-10): ")
console.log(`Fetching ${limit} cat image(s)...`)
let requestURL = `https://api.thecatapi.com/v1/images/search?limit=${limit}`
getCatPic(requestURL)