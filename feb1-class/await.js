let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved after 3s')
    },3000)
})

async function display(){
    let x=await promise
    console.log(x)
}
display()

let promise2=new Promise(function(resolve,reject){
    setTimeout(function(){
        reject('Promise2 resolved after 3s')
    },3000)
})

async function display2(){
    try{
    let x=await promise2
    console.log(x)
    //return x
    }catch(e){
        console.log(e)
    }
}
display2()