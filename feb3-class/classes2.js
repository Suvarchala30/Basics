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
}
let amber=new Student('Amber','Course1','Batch1','MERN',81,22)
let jyothi=new Student('Jyothi','Course1','Batch1','MERN',23,76)
//console.log(amber.name + ' is from ' + amber.batch + ', learning '+ amber.course + ' for ' + amber.techStack + ' specialization') // To print for all vales this would be long son use above method

console.log(amber.display())
console.log(jyothi.display())
amber.showResult()
jyothi.showResult()