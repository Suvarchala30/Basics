function fun1(callback){
    setTimeout( ()=> {
        console.log("in function 1")
        callback()
    },3000);
    
    
}

function fun2(){

    console.log('in function 2')
}
function fun3(){

    console.log('in function 3')
}
fun1(fun2)
fun1(fun3)

// fun1(function (){
//     console.log("I function 2")
// }) Insted of line 10 to 18 we can directly use this
