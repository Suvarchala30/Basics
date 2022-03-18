import React, { useEffect, useRef, useState } from "react";

const Refhook = ()=>{
    const [inputvalue,setInputvalue] = useState("")
    //const [count,setCount]=useState(0)
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count]) -------- This causes infinite loop

    const count = useRef(0)

    useEffect(()=>{
        count.current=count.current+1
    })//whenever there is an update this function runs
    return(
        <div className="refHook">
            <input type="text"  value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
            <h1>Render count: {count.current}</h1>
        </div>
    )
}

const Refhook2 = ()=>{
    const inputElement = useRef()

    const focusInput = ()=>{
        console.log(inputElement)
        inputElement.current.focus()
    }

    return(
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

//export default Refhook

export default Refhook2