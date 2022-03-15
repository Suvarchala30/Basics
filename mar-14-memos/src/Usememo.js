import React, { useMemo, useState } from "react";

const Usememocomp = ()=>{
    const [count,setCount]=useState(0)
    const [todo,setTodo]=useState([])
    const handleTodo=(e)=>{
        e.preventDefault()
        setTodo((t)=>[...t,'New Todo'])
    }
    const increment=(e)=>{
        e.preventDefault()
        setCount(c=>c+1)
    }
    //const calculation=expensiveCalculation(count)
    const calculation=useMemo(()=>expensiveCalculation(count),[count])
return(
    <div className="usem">
        <div>
            <h2>Todo List</h2>
            {
                todo.map((todos,index)=>(
                    <p key={index}>{todos}</p>
                ))
            }
            <button onClick={handleTodo}>Add Todo</button>
        </div>
        <hr />
        <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
        </div>
    </div>
)
}

const expensiveCalculation=(num)=>{
    console.log('Calculating....')
    for(let i=0;i<100000000;i++){
        num+=1
    }
    return num
}
export default Usememocomp