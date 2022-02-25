const char1="roadie"

const char2="roadi"
let arr=""


for(let i=0,j=0;i<=char1.length;i++,j++){
    if(char1[i]!=char2[j]){
        arr+=char1[i]
        i++
    }
}
console.log(arr)

