const getStudentData=()=>{
    return new Promise((resolve,reject)=>{
        
                console.log('Fetching student data....')
                let dataToReturn
                setTimeout(()=>{
                    console.log('Data fetched Succesfully')
                    //dataToReturn=studentData
                    resolve(
                        [
                            {
                                name:'Suvarchala',
                                batch:'Batch 11'
                            },
                            {
                                name: 'Prajakta',
                                batch:'Batch 12'
                            }
                        ]
                    )
                },4000)
    })
    }
    getStudentData().then(function (studentData){
        return studentData.filter(student => {
            return student.batch==='Batch 12'
        })
    }).then(function (student){
        console.log(student[0].name)
     })
