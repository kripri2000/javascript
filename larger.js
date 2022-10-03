
const prompt = require('prompt-sync')();
var a = parseInt(prompt("Enter first number : "));
var b = parseInt(prompt("Enter second number : "));
if(a>b)
    console.log(a+" is largest");
else
    console.log(b+" is largest");