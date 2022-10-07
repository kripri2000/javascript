class Student{
    constructor(name,rollno) {
        this.name = name;
        this.rollno = rollno;   
    }
    static setDetails(){
        console.log('details are :')
    }
    showDetails(){
        console.log(this.name+" "+this.rollno);
    }
}

let s1 = new Student('krishnapriya',23);
Student.setDetails();
s1.showDetails();
let s2 = new Student('akshay',25);
s2.showDetails();
