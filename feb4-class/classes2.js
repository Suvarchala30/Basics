/*
Class Inheritance
Inheriting properties from parnet class to child class i.e., from person to student
*/
//Student is subset of persoon
//All students are persons but all persons are not students
class Person{
    constructor(fullname){

        this.fullname=fullname
    }
}

class Student extends Person{
    constructor(fullname,classname){
        super(fullname)
        this.classname=classname
    }
}
let sita = new Person('Sita Desouza')
let laxman=new Student('Laxman Singh','5th Standard')
let suvarchala=new Student('Suvarchala Reddy','Final year')
console.log(suvarchala,laxman,sita)
