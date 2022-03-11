import React, { useState } from "react"
import './App.css';
import Keypad from "./Components/Keypad"
import Display from "./Components/Display"
import Button from "./Components/Button"

function App() {

  const [data,setData]=useState('')
  const labels=["C","7","4","1","0","/","8","5","2",".","*","9","6","3","","-"]

  const calculate = ()=>{
    try{
      const result=eval(data)
      setData(result)
    }catch(e){
      setData("Error")
    }
  }


  const handleClick = (e)=>{
    const value=e.target.getAttribute('data-value')
    switch(value){
      case "C":
        setData('')
        break;
      case "equal":
        calculate();
        break;
      default:
        setData(data+value)
    }
  }
  return (
    <div className="App">
      <Display data={data}/>
      <Keypad>
{
  labels.map((buttonData)=>(<Button key={buttonData} onClick={handleClick} value={buttonData} label={buttonData}/>))
}
        <Button onClick={handleClick} value="+" size="2" label='+'/>
        <Button onClick={handleClick} value="equal" size="2" label='='/>
      </Keypad>
      
    </div>
  );
}

export default App;
