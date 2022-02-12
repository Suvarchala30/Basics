
//Given an array of n elements,elements can be anywhere from 0 to n, starting from 0 , find out the element which is missing in the array
let arr=[1,6,4,3,0]
let total=(arr.length)*(arr.length -1)/2
console.log(total)
arr.map((value)=>{
    if(value<arr.length){
    total-=value
    }
})
console.log(total)

//Another method
let n=arr.length
arr.sort((a,b)=>a-b)
let i
for(i=0;i<n;i++){
    if(arr[i]!==i){
        break
    }
}
console.log(arr)
console.log(i)
