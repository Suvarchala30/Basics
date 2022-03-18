import React, { useCallback, useState } from "react";

const Callback = ()=>{
    const [text,setText]=useState('')
    const [skill,setSkill]=useState(['HTML','CSS','JAVASCRIPT','REACT'])

    const handleClick=()=>{
        setSkill(skill.concat(text))
    }

    const handleRemoveSkill = useCallback((ski)=>{
setSkill(skill.filter(s=>s!==ski))
    },[skill])
    return(
        <div className="callBack">
            <input type="text" onChange={(e)=>setText(e.target.value)}/>
            <button onClick={handleClick}>Add Skill</button>
            <SkillList skills={skill} handleRemoveSkill={handleRemoveSkill}></SkillList>
        </div>
    )
}
const SkillList = React.memo(({skills,handleRemoveSkill})=>{
console.log('re-rendering')
return(
    <>
    <ul>
    {
        skills.map((s,i)=>(<li key={i} onClick={()=>handleRemoveSkill(s)}>{s}</li>))
    }
    </ul>
    </>
)
})
export default Callback