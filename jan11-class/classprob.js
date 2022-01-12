let arr=[2,6,3,1,4,9]
//use .map() and return a new array which will have the number at that position in fibonacci series
//o/p: [1,8,2,1,3,34]
arr.sort((a,b)=>(a-b))

let newArr=[0,1]
let x=0
let y=1
let z
for(let i=2;i<=arr[arr.length-1];i++){
    z=x+y;
    x=y;
    y=z;
    newArr.push(z)
}
console.log(newArr)
let abc=arr.map((value)=>{
    
    
    return newArr[value]
    
})
console.log(abc)