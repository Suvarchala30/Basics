//Done with basics. New topics - kind of Advanced topics
//let x=5
 //let x=10//let doesn't allow re-declaration
//console.log(x)

/*function abc(){
    let y=10

    function def(y){
        return y
    }
console.log(def(y))

}
abc()*/

//higher order function
//1.Takes another function as argument (callback)
//2.returns another function

function abc(){
    let y=10

    return function (){
        return y
    }

}
const innerfunc=abc()
console.log(innerfunc());//or below method can be used both returns same
//console.log(abc()())//to call inner function we use ()() - two times
//Closures: Inner function will have access to all the variables in outer scope even after it has returned