const rolls=[2,8,3,4,6,4,10,0,10,7,1,3,3,5,5,9,1,2,8,5]
function bowling(rolls){

let score=0
let rollIndex=0
for(let frameindex=1;frameindex<=10;frameindex++){
    if(rolls[rollIndex]==10){
        score +=10+rolls[rollIndex+1]+rolls[rollIndex+2]
        rollIndex++
    }else{
        let frameScore=rolls[rollIndex]+rolls[rollIndex+1]
        if(frameScore==10){
            score+=10+rolls[rollIndex+2]
            
        }else{
            score+=frameScore
            
        }
        rollIndex+=2
    }
}

console.log(score)
}
bowling(rolls)