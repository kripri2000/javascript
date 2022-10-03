const prompt = require('prompt-sync')();

var a = [];
for(let i=0;i<5;i++)
    a[i] = parseInt(prompt("Enter number : "));
    
if(a[0]>a[1] && a[0]>a[2] && a[0]>a[3] && a[0]>a[4])
    console.log(a[0]+ " is the largest");
else if(a[1]>a[0] && a[1]>a[2] && a[1]>a[3]&& a[0]>a[4])
    console.log(a[1]+ " is the largest");
else if(a[2]>a[0] && a[2]>a[1] && a[2]>a[3] && a[0]>a[4])
    console.log(a[2]+ " is the largest");
else if(a[3]>a[0] && a[3]>a[1] && a[3]>a[2] && a[3]>a[4])
    console.log(a[3]+ " is the largest");
else 
    console.log(a[4]+ " is the largest");

