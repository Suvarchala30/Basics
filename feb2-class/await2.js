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

//await only waits for resolved scenario
//if there is any rejected case use try catch block

async function display1(){
    console.log('Display function started')
    console.log('Promise1 resolved with message - ',await promise)
    console.log('Promise2 resolved with message - ',await promise2)
    console.log('Display function end')
}
display1()