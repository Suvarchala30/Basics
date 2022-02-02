let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved after 3s')
    },3000)
})

let promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise2 resolved after 3s')
    },2000)
})

//This block is for testing only
function display(){
    console.log(promise)
}
display()
// Returns pending promise 

//async - Informs JS that asynchronus code is being handled, also returns a promise
//await - Waits for the promise top get resolved and then returns the solved message

async function display1(){
    console.log('Display function started')
    let resolvedmsg=await promise
    console.log('Promise1 resolved with message - ',resolvedmsg)
    let resolvedmsg2=await promise2
    console.log('Promise2 resolved with message - ',resolvedmsg2)
    console.log('Display function end')
}
display1()//This gives output after 3s as in line 3



let promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject('Promise3 rejected after 3s')
    },3000)
})
// async function display2(){
//     let rejectedmsg=await promise3
//     console.log(rejectedmsg)//returns error since it's rejected
// }

async function display2(){
    console.log('Display2 functon started')
    try{
        let rejectedmsg=await promise3
          console.log(rejectedmsg)
    }catch(rejectedmsg2){
        console.log('Promise3 Rejected with message - ',rejectedmsg2)
    }
    console.log('Display2 function ended')
}
display2()