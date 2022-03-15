import React, { useState } from "react"
import Skillset from "./Skillset"

const ReactMemoComp = () =>{
    const [text,setText]=useState('')
    const [skill,setSkill]=useState(['HTML','CSS','JAVASCRIPT','REACT'])
    const [error,seterror]=useState('')

    const handleClick = (e)=>{
e.preventDefault()
setSkill(skill.concat(text))
    }

    const handleChange = (e)=>{
        if(e.target.value.length<=5){
            seterror("Length should be greater than 5")
        }else{
            seterror('')
        }
        setText(e.target.value)

    }

    return(
        <div className="memo">
            <input type="text" onChange={handleChange}/>
            
                <small>{error}</small>
            
            
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