let text = "krishnapriya";
console.log(text.length);
//Slice op for extracting substring
var substr = text.slice(-10);
console.log(substr);
substr = text.slice(3,7);
console.log(substr);
substr = text.slice(-10,-1);
console.log(substr);

//Using substring(start,end)
var substr = text.substring(-10);
console.log("\n"+substr);
substr = text.substring(3,7);
console.log(substr);

//using substr(start,len)
var substr = text.substr(3,7);
console.log("\n"+substr);