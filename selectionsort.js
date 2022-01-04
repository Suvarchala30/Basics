function selectionsort(arr){

//for n passes
for(let i=0;i<arr.length;i++){
    let min=i
    for(let j=i+1;j<arr.length;j++){
        if(arr[j]<arr[min]){
            min=j
        }
    }
    if(min!==i){
        [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    console.log(`After ${i+1} th pass, Arr is ${arr}`)
}

    return arr
}

let arr=[4,2,8,4,1,9,3]
console.log(selectionsort(arr))