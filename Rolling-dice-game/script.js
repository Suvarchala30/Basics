const submit=document.getElementById("submit")
const playerCountE1=document.getElementById("playerCount")
const gridSizeE1=document.getElementById("gridSize")

submit.addEventListener("click",function (){
    const numPlayers=playerCountE1.value 
    const gridSize=gridSizeE1.value

    let playerStats=[]
    for(let i=1;i<=numPlayers;i++){
        playerStats.push({
            id:i,
            reach:0,
            rolls:[],
            path:[0]
        })
    }

    //Till when we play the game??
    //Ans is till someone becomes the winner
    //Winner reach will >=gridsize*gridsize
    let maxReach=0
    let maxReachId= -1
    while(maxReach<gridSize*gridSize){
        for(let i=0;i<numPlayers;i++){
            const currRoll=getRandomRoll()

            playerStats[i].rolls.push(currRoll)
            if(playerStats[i].reach===0 && (currRoll!==1 && currRoll!==6)){

                //this was neither 1 nor 6
                //Do nothing
                playerStats[i].path.push(0)

            }else{
                const newReach = playerStats[i].reach+currRoll
            if(newReach<=gridSize*gridSize){
            playerStats[i].reach=newReach
            playerStats[i].path.push(newReach)
            if(newReach>maxReach){
                maxReach=newReach
                maxReachId=playerStats[i].id
            }
            if(maxReach>=gridSize*gridSize){
                break;
            }
            }else{
                playerStats[i].path.push(playerStats[i].reach)
            }

            
            }

            
        }
    }
    console.log(playerStats)
    console.log(maxReachId)
    createGameCard(playerStats,maxReachId,numPlayers)
})
function createGameCard(playerStats,winnerId,numPlayers){
    const table=document.getElementById("card-body")
    table.innerHTML=""

    for(let i=0;i<numPlayers;i++){
        const tr=document.createElement("tr")

        const tdId=document.createElement("td")
        const tdDiceRoll=document.createElement("td")
        const tdDiceRollHistory=document.createElement("td")
        const tdPositionHistory=document.createElement("td")
        const tdWinnerStatus=document.createElement("td")

        tdId.innerHTML=playerStats[i].id

        //Last elemnt in dice roll
        const lastIndexDiceRoll=playerStats[i].rolls.length-1
        tdDiceRoll.innerHTML=playerStats[i].rolls[lastIndexDiceRoll]

        tdDiceRollHistory.innerHTML=playerStats[i].rolls.toString()
        tdPositionHistory.innerHTML=playerStats[i].path.toString()
        if(playerStats[i].id==winnerId){
            tdWinnerStatus.innerHTML="Winner"
        }else{
            tdWinnerStatus.innerHTML=""
        }

        tr.appendChild(tdId)
        tr.appendChild(tdDiceRoll)
        tr.appendChild(tdDiceRollHistory)
        tr.appendChild(tdPositionHistory)
        tr.appendChild(tdWinnerStatus)

        table.appendChild(tr)
        
    }
}
function getRandomRoll(){
    return Math.floor(Math.random()*6+1)
}