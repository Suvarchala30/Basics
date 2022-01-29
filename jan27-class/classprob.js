let students=[
    {
        name:'John',
        batch:'Batch 11',
        marks:{
            english:'38',
            maths:'72',
            science:'82',
            hindi:'21',
            social:'48',
        }
    },
    {
        name:'Sita',
        batch:'Batch 12',
        marks:{
            english:'74',
            maths:'82',
            science:'32',
            hindi:'42',
            social:'28',
        }
    },
    {
        name:'Shyam',
        batch:'Batch 13',
        marks:{
            english:'28',
            maths:'92',
            science:'63',
            hindi:'81',
            social:'61',
        }
    },
]
//Return an array with total marks
// //Expected output[261,258,325]

let arr=students.map((value)=>{
    return Object.values(value.marks)
})
console.log(arr)
let finalarr=arr.map((value)=>{
    return value.reduce((total,element)=>{
        return Number(total)+Number(element)
    })
})
console.log(finalarr)

//Another method
let studentsTotalMarks=students.map((student)=>{
    let total=0
    for (subject in student.marks){
        total = total+Number(student.marks[subject])
    }
    return total
})
console.log(studentsTotalMarks)
//Method-3
let studentmarks=students.map((student)=>{
    let {english,maths,science,hindi,social}=student.marks
    return Number(english)+Number(maths)+Number(science)+Number(hindi)+Number(social)
})
console.log(studentmarks)
