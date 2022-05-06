let arr2=[1,2,3,4,5,-4,-6,0,-9]
//let arr2=[11,2,43,4,25]
//console.log(arr[5]*arr[6])
let temp=[];
arr2.sort((a,b)=>(a-b))
console.log(arr2)
for(let i=0;i<arr2.length-2;i++){
    temp[i]=arr2[i]*arr2[i+1]*arr2[i+2]
    console.log(temp[i])
   
}

for(let i=0;i<temp.length-2;i++){
    if(temp[i]>temp[i+1]){
        if(temp[i]>temp[i+2]){
            console.log(temp[i])
        }
        else{
            console.log(temp[i+2])
        }
    }else if(temp[i+1]>temp[i+2]){
        console.log(temp[i+1])
    }else{
        console.log(temp[i+2])
    }
}
