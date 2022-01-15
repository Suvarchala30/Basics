let arr=[2,6,1,3,8]
let sum=0
arr.forEach((value)=>{
    sum=sum+=value
})
console.log(sum)//sum of array elements

let x=arr.reduce((total,element)=>{//call back to print summ of elements in array
    return total+element
})
console.log(x/arr.length)//Returns avg of array
console.log(x)


let xx=arr.reduce((totalpro,element)=>{//call back to print product of elements in array
    return totalpro*element
})
console.log(xx)

//min element in array
let a=[1,3,-2,6,170000,11,-1,-4]
let min=a.reduce((tempmin,element)=>{
    if(element<tempmin)//if we need max value give >
    return element
    else
    return tempmin
})
console.log(min)
//Number.NEGATIVE_INFINITY - for most largest negative number
//Number.INFINITY - for most largest number

