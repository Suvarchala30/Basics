let arr=[2,6,1,3,8]
let sum=0
arr.forEach((value)=>{
    sum=sum+=value
})
console.log(sum)//sum of array elements

let x=arr.reduce((total,element)=>{//call back to print summ of elements in array
    return total+element
})
console.log(x)


let xx=arr.reduce((totalpro,element)=>{//call back to print product of elements in array
    return totalpro*element
})
console.log(xx)