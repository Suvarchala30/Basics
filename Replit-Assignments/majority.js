function major(arr,n)
{
  //your code here
  
 let reqfreq=Math.floor(n/2)

 let store={}//object

 for(let i=0;i<n;i++){
     if(store[arr[i]]!==undefined)
     store[arr[i]]++;
     else
     store[arr[i]]=1;
     if(store[arr[i]]>reqfreq){
         //console.log(store)
         return arr[i]
     }
 }
}
let arr=[2,3,2,3,2,3,3]

console.log(major(arr,arr.length))