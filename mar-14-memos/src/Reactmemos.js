import React, { useState } from "react"
import Skillset from "./Skillset"

const ReactMemoComp = () =>{
    const [text,setText]=useState('')
    const [skill,setSkill]=useState(['HTML','CSS','JAVASCRIPT','REACT'])

    const handleClick = (e)=>{
e.preventDefault()
setSkill(skill.concat(text))
    }

    const handleChange = (e)=>{

        setText(e.target.value)

    }

    return(
        <div className="memo">
            <input type="text" onChange={handleChange}/>
            <button onClick={handleClick}>Add Text</button>
            <br />
            <Skillset skills={skill} />
        </div>
    )

    // const Skillset = ({skills}) =>{
    //     console.log('re-rendering')
    //     return(
    //         <ul>
    //             {
    //                 skills.map((skill,index)=> (<li key="index">{skill}</li>) )
    //             }
    //         </ul>
    //     )
    // }
}

export default ReactMemoComp