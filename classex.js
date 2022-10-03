class Student{
    constructor(name,rollno,year){
        this.name = name;
        this.rollno = rollno;
        this.year = year;
    }
    age(currYear){
        return currYear - this.year;
    }
    printDetails(){
        console.log(this.name+"\n"+this.rollno+"\n"+this.age(2022))
    }
}

let stud = new Student('krishnapriya',12,2000);
stud.printDetails();