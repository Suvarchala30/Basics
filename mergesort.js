function merge(arr,left,middle,right){


    var n1=middle-left+1;
    var n2=right-middle;

    var L=new Array(n1)
    var R=new Array(n2);

    for(var i=0;i<n1;i++){
        L[i]=arr[left+i]
    }
    for(var i=0;i<n2;i++){

    }

    while(i<n1 && j<n2){

    }
}
function dividearr(arr,left,right){
    if(left>=right){
        return;
    }
    var middle = left + parseInt((right+left)/2); //used to avoid any exemptions
    //var mid=(right+left)/2 - Alternate method

    dividearr(arr,left,middle);
    dividearr(arr,middle+1,right);
    mergersort(nums,left,middle,right);

}
function mergersort(arr){

    dividearr(arr,0,arr.length -1)
    console.log(arr)
}

let arr=[5,3,7,4,8,2,1]
mergersort(arr)