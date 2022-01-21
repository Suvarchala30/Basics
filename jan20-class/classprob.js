let inputArray = [
    {name: 'Amber', batch: 'Batch 12', likesIceCream: false},
    {name: 'Pratik', batch: 'Batch 12', likesIceCream: true},
    {name: 'Charan', batch: 'Batch 11', likesIceCream: false},
    {name: 'Dhanashree', batch: 'Batch 12', likesIceCream: true},
    {name: 'Anirban', batch: 'Batch 10', likesIceCream: false}
  ]

 //first map them filter 
let studentice=inputArray.map(student => {
    if(student.likesIceCream)
    return student.name
})
let studentlikeicecream=studentice.filter(value=>{
   
    return value
})
console.log(studentlikeicecream)


//first map then filter
let xx=inputArray.filter(student => student.likesIceCream)
console.log(xx)
let yy=xx.map(student => student.name)
console.log(yy)


//forech
let zz=[]
inputArray.forEach(student =>{
    if(student.likesIceCream)
    zz.push(student.name)
})
console.log(zz)