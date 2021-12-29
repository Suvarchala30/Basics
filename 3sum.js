function threesum(arr,target){
    let len=arr.length;
    let closestsum=100000000
    for(let i=0;i<len-2;i++){
        for(let j=i+1;j<len-1;j++){
            for(let k=j+1;k<len;k++){
                let currsum=arr[i]+arr[j]+arr[k];
                if(Math.abs(currsum-target)<Math.abs(closestsum-target)){
                    closestsum=currsum;
                }
            }
        }
    }
    return closestsum;
}
console.log(threesum([-1,2,1,-4],1))