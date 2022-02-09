function decimaltobinary(num){
    let binarystr = ""

    while(num>0){

        let rem = num%2;
         //Method 1
        binarystr=rem.toString() + binarystr

    //Method 2
    //binarystr=binarystr+rem.toString()
    
        num=Math.floor(num/2)
    }
    //Method 1
    return binarystr

    //Method 2
    //return binarystr.split("").reverse().join("")
}
console.log(decimaltobinary(8))


function binarytodecimal(binarystr){
    let multiplier = 1 //2^0
    let num=0;
    for(let i=binarystr.length-1;i>=0;i--){
        num=num+parseInt(binarystr[i])*multiplier
        multiplier=multiplier*2
    }
    return num
}
console.log(binarytodecimal('1010'))
//shortcut to convert binary to decimal
console.log(parseInt('1010',2))

//another way to convert decimal to binary
function dectobin(n){
    let binstr=[]
    while(n>0){
        let rem=n%2
        binstr.unshift(rem)
        n=Math.floor(n/2)
    }
    return binstr
}
console.log(dectobin(8))