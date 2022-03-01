import React from 'react';
import './App.css';
import Tabs from './Components/Tabs';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state={
      tabName: ['Home', 'About','Features']
    }
  }
  render(){
  return(
    <div className="App">
      <div className="browser">
        <Tabs tabName={this.state.tabName}/>

      <div className="viewport">
      Pages Go here
      </div>
      </div>
    </div>
  )
}
}

export default App;
