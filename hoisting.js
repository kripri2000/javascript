//Hoisting is moving all declarations to the top of the current scope

x = 5;
console.log(x);
var x;  //maybe moved to top
let x;  //gives an error
//const x;  error