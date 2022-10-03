//Aplhabetic sort

const arr = ['hello','apple','bee','honey'];
arr.sort();
console.log(arr);

//Numeric sort ascending
const num = [45,2,11,67,22];
num.sort(function(a,b){return a-b;});
console.log(num);

//Numeric sort descending 
num.sort(function(a,b){return b-a;});
console.log(num)