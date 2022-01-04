//Linear Search

function linearsearch(nums,target){
    for(let i=0;i<nums.length;i++){
        if(nums[i]===target){
            return true;
        }
        return false
    }
}
let nums=[10,5,8,4,2,6,88,55]
let target=6


console.log(linearsearch(nums,target))


//Binary search - Precondition that elements must be sorted
let n = [1,3,5,7,8,9]
    let t=8
function binarysearch(n,t){
    
let start=0
let end=(n.length)-1
let index=-1
while(start<end){
    let mid=Math.floor((start+end)/2)
    if(n[mid]===t){
    index=mid
        return index //gives position of target
    }
    else if(n[mid]<t)
    start=mid+1
    else
    end=mid-1
}
return false
}
console.log(binarysearch(n,t))

//in linear and binary searches the array and target should not be defined inside the function. The variable initializations must be done outside the function block either below or above