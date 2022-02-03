//Classes - Template for objects

class Student {
    constructor(name,course,batch,techStack){
        this.name=name
        this.course=course
        this.batch=batch
        this.techStack=techStack
    }
}
let amber=new Student('Amber','Course1','Batch1','MERN')
let jyothi=new Student('Jyothi','Course1','Batch1','MERN')
console.log(amber)
console.log(jyothi)


class Student2{
    constructor(){

    }
}

let suvarchala=new Student2()
console.log(suvarchala)

class Student3{
    constructor(name){
        this.name=name
    }
}
let myname=new Student3('Suvarchala')
console.log(myname)

function student4(name2,course,batch,techstack){
    this.name2=name2
    this.course=course
    this.batch=batch
    this.techstack=techstack
}
//prototype keyword is used to add properties to object constructors
let name2='Suvarchala'
student4.prototype.country='India'
let person=new student4(name2,'ACCIO','BATCH 11','MERN')
console.log(person)
console.log(person.country)
console.log(student4)