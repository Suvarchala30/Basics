

function bubblesort(arr){

//outer pass  - n passes
for(let i=0;i<arr.length;i++){

//Inner pass
for(let j=0;j<arr.length-i-1;j++){

    //Ascending order
    //check if first number is greater than second
    if(arr[j]>arr[j+1]){
        //swap them
        let temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
    }
}
}
    return arr
}



let arr=[7,5,2,3,8,1,1,6,4,10,9,8,7,6,5,4,3,2,1]
console.log(bubblesort(arr))