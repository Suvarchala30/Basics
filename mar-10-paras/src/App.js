import React, { useState } from "react"
import './App.css';
import Data from "./Data"

function App() {
  const [text,setText]=useState([])
  const [count,setCount]=useState(0)
  const handleClick =(e)=>{
    e.preventDefault()
    let amount=parseInt(count)
    setText(Data.slice(0,amount))
  }

  return (
    <div className="App">
      <h1 className="title">TIRED OF BORING LOREM IPSUM?</h1>
      <form className="input-section" onSubmit={handleClick}>
        <label htmlFor="paras" className="para-label">Paragraphs: </label>
        <input type="number" min="0" max="10" value={count} onChange={(e)=>setCount(e.target.value)} className="paras"/>
        <button className="btn">Generate</button>
      </form>
      <article className="display">
        {
          text.map((item,index)=>{
            return(
            <p className="text" key={index}>{item}</p>
            )
          })
        }
      </article>
    </div>
  );
}

export default App;
