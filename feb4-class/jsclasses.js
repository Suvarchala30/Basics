class Student {
    constructor(name,course,batch,techStack,marks1,marks2){
        this.name=name
        this.course=course
        this.batch=batch
        this.techStack=techStack
        this.marks1=marks1
        this.marks2=marks2
    }
    display(){
        return this.name + ' is from ' + this.batch + ', learning '+this.course + ' for '+this.techStack + ' specialization! '
    }

    showResult(){
        if(this.marks1>35)
        console.log(this.name + ' has passed in subject 1 ')
        else
        console.log(this.name + ' has not passed in subject 1')
        if(this.marks2>35)
        console.log(this.name + ' has passed in subject 2 ')
        else
        console.log(this.name + ' has not passed in subject 2 ')
    }

    changeTechStack(techStackToBeUpdated){
        this.techStack=techStackToBeUpdated
    }
}
let amber=new Student('Amber','Course1','Batch1','MERN',81,22)
let jyothi=new Student('Jyothi','Course1','Batch1','MERN',23,76)

let sudharma=new Student('Sudharma','Course1','Batch1','MERN',81,22)

sudharma.changeTechStack('MEAN')
console.log(sudharma)