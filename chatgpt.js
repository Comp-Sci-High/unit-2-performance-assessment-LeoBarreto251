const env = require('dotenv').config({ quiet: true });
const prompt = require('prompt-sync')();
const apiKey = process.env.apiKey1

// run your code with node chatgpt.js
// add your apiKey to .env from gChat
// Follow the checklist on the Performance Assessment Google Doc

let requestURL = "https://api.openai.com/v1/responses"

async function createResponse(responseData){
const options = {
method: `POST`,
headers: {
Authorization: `Bearer ` + apiKey,
"Content-Type": "application/json",
},
body: JSON.stringify(responseData)
};
const response = await fetch(requestURL, options)
const data = await response.json()

console.log(data.output[1].content[0].text)
}
console.log("Welcome to ChatGPT API")

const response = prompt("Input your request here:")
const createRequest ={
"model":"gpt-5",
"input": response
}
console.log()
createResponse(createRequest)