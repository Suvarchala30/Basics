let students = [
    {
      name: 'John',
      batch: 'Batch 11',
      marks: {
        english: '38',
        maths: '72',
        science: '82',
        hindi: '21',
        social: '48',
      }
    },
    {
      name: 'Sita',
      batch: 'Batch 12',
      marks: {
        english: '74',
        maths: '82',
        science: '32',
        hindi: '42',
        social: '28',
      }
    },
    {
      name: 'Shyam',
      batch: 'Batch 13',
      marks: {
        english: '28',
        maths: '92',
        science: '63',
        hindi: '81',
        social: '61',
      }
    }, 
    {
      name: 'Lakshman',
      batch: 'Batch 14',
      marks: {
        english: '48',
        maths: '83',
        science: '63',
        hindi: '71',
        social: '63',
      }
    }
  ]
  /* Q -  Return an array of student names who secured > 30 marks in all subjects
    Expected O/P: ['Lakshman']
    */
   const arr=students.map((value)=>{
       return Object.values(value.marks)
   })
   console.log(arr)