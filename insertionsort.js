function insertionsort(arr){

for(let i=1;i<arr.length;i++){

    for(let j=i-1;j>=0;j--){
        if(arr[j+1]<arr[j]){
            //swap them
            [arr[j+1],arr[j]]=[arr[j],arr[j+1]]
        }
    }
}
    return arr
}
let arr=[5,4,7,2,88,45,8,44]
console.log(insertionsort(arr))