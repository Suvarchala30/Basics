let fn="subam"
let sn="kumar"

let subam={
    first:fn,
    second:sn
}
console.log(subam)


let ra={
    abc:"abc",
    def:"def"
}
let ra2=Object.assign({ghi:"ghi"},ra)//adds ghi key to ra obj and stores in ra2 - same as spread operator
console.log(ra2)
console.log(ra)


let amber={
    name1:"amber",
    batch:"batch 11",
    techstack:"mern"
}
// let name=amber.name
// let batch=amber.batch
// let techstack=amber.techstack
//console.log( name1 ,batch,techstack) //or
let { name1 ,batch,techstack }=amber//convert object to variables - destructuring
console.log( name1 ,batch,techstack)//same key names should be used


let amber2={
    name2:"amber",
    batch2:"batch 11",
    techstack2:"mern",
    address:{
        city:"Hyd",
        state:"telangana"
    }
}
let { name2,batch2,techstack2,address:{city,state}}=amber2
console.log(name2,batch2,techstack2,city,state)
console.log(city,state)

let arr=[1,2,3]

let[first,second,third]=arr
console.log(first,second,third)

let a=5
let b=6
let c
c=a
a=b
b=c
console.log(a,b)

let aa=5
let bb=6
aa=aa+bb//13
bb=aa-bb//5
aa=aa-bb//6
console.log(aa,bb)

var aaa=5
var bbb=6
var [aaa,bbb]=[bbb,aaa]
console.log(aaa,bbb)//this logic doesn't work with let and const

//object.entries
let suvarchala={
    name:'suvarchala',
    batch:'batch 11',
    techstack:'mern'
}
console.log(Object.keys(suvarchala))
console.log(Object.values(suvarchala))
console.log(Object.entries(suvarchala))//returns key value format