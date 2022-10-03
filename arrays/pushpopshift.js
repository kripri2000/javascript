const fruits = ['banana','apple','orange','kiwi'];
//Push
fruits.push('lemon');
console.log("After push : ");
console.log(fruits);
//Pop
fruits.pop();
console.log("After pop : ");
console.log(fruits);
//Shift - removes elt from front 
let fruit = fruits.shift();
console.log("After shift : ")
console.log(fruit,fruits);
//Unshift - adds new elt to front of array
let fr = fruits.unshift('lemon');
console.log("After unshift : ")
console.log(fr,fruits);
