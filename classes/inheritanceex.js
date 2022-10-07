class Person{
    constructor(name){
        this.name = name;
    } 
    printDetails(){
        console.log(this.name);
    } 
}
class Student extends Person{
    constructor(name,rollno,age){
        super(name); 
        this.rollno = rollno; 
        this.age = age;
    }
    showDetails(){
        this.printDetails();
        console.log(this.rollno+"\n"+this.age);
    }
}
let stud = new Student('krishapriya',22,12);
stud.showDetails();