let arr=[1,6,4,3,0]
//Given an array of n elements,elements can be anywhere from 0 to n, starting from 0 , find out the element which is missing in the array
let total=0
let y=(arr,n)=>{
    total=(n+1)*(n)/2
}
y(arr,arr.length-1)
console.log(total)
arr.map((value)=>{
    if(value<arr.length){
    total-=value
    }
})
console.log(total)