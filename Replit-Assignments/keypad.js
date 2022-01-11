 function letterCombinations(A){
    const digitarr={
        '2':'abc',
        '3':'def',
        '4':'ghi',
        '5':'jkl',
        '6':'mno',
        '7':'pqrs',
        '8':'tuv',
        '9':'wxyz',
        '0':'0',
        '1':'1'
     }
    
let ans=[]

if(!A.length)//checks if length is zero
return ans

const bfs=(pos,str)=>{
    if(pos===A.length){
        ans.push(str)
    }else{
        let letters=digitarr[A[pos]]
        for(let i=0;i<letters.length;i++){
            bfs(pos+1,str+letters[i])
        }
    }
}
bfs(0,"")
return ans
}
console.log(letterCombinations('236'))