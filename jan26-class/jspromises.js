//Assume this data lies in server
let studentData=[
    {
        name:'Suvarchala',
        batch:'Batch 11'
    },
    {
        name: 'Prajakta',
        batch:'Batch 12'
    }
]
//Function to handle fetch behaviour
// const getStudentData=()=>{
//     console.log('Fetching student data....')
//     let dataToReturn
//     setTimeout(()=>{
//         console.log('Data fetched Succesfully')
//         dataToReturn=studentData
//         console.log(studentData)
//     },4000)
//     return dataToReturn//gives undefined since it's asynchrouns it will not define until setttimeout is done
// }
// console.log(getStudentData())


const getStudentData=()=>{
return new Promise((resolve,reject)=>{
    
            console.log('Fetching student data....')
            let dataToReturn
            setTimeout(()=>{
                console.log('Data fetched Succesfully')
                //dataToReturn=studentData
                resolve(studentData)
            },4000)
            //return dataToReturn
})
}
getStudentData()//this doesn't return studentdata
getStudentData().then(function (studentD){
    console.log(studentD)
})//if we need data we must use .then method


let promise=new Promise(function (resolve,reject){
    resolve("I'm straight-away resolving")
})
//Promise chaining
promise.then(function(resolvemsg){
    return resolvemsg + " promise!"
}).then(function (updatedmsg){
    return updatedmsg + " C"
}).then(function (updatemsg2){
    console.log(updatemsg2)//parameter names can also be same since they are local scope
})