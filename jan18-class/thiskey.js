/*
array properties - array.length
array methods - pop,push,map,reduce,foreach,every,some,filter
*/
/*
functions
-code, name [optional](properties)
-call,apply,bind (methods)
*/
// function fun1(){
//     console.log('abc')
// }



// function abc(){
//     console.log(this)
// }
// abc()//Returns window object
//console.log(obj)

let saurabh={
    fn:"saurabh",
    sn:"rajput",
    noofhrs:2,
    noofhtml:3
}

function fullname(){
    console.log(saurabh.fn + ' ' + this.ln)//this is refereing to entire window
}
fullname()

let saurabh2={
    fn:"saurabh",
    sn:"rajput",
    noofhrs:2,
    noofhtml:3,
    fullname: function(){
        console.log(this.fn)
        console.log(this)
    }
}
saurabh2.fullname()