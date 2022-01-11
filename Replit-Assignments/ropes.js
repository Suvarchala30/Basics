function mincost(arr){
arr.sort((a,b)=>a-b)//sorts array
let cost=0
while(arr.length>1){
    let first=arr.shift()
    
    let second=arr.shift()
    

    cost += first+second
    arr.push(first+second)
    arr.sort((a,b)=>a-b)

}

    return cost;
}

let arr=[4,3,2,6]
console.log(mincost(arr))