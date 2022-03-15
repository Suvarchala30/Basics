import React from "react";

const Skillset = React.memo(({skills}) =>{
    console.log('re-rendering')
    return(
        <ul>
            {
                skills.map((skill,index)=> (<li key={index}>{skill}</li>) )
            }
        </ul>
    )
})

export default Skillset