const person = {  
    firstName : 'akshay',
    lastName : 'naron',
    fullName : function(){return this.firstName+" "+this.lastName;}
};
const person1 = {
    firstName : 'krishna',
    lastName : 'priya'
};
console.log(person.fullName());
console.log(person.fullName.call(person1));
console.log(person.fullName.apply(person1));


let fullName = person.fullName.bind(person1); //person1 borrows fullName method from person
console.log(fullName());