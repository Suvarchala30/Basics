import React from "react";

function Tabs(props){
    console.log(props)
    return(
        <div className="tabs">
          <div className="tab">
            <a href="#">Home</a>
          </div>
          <div className="tab">
            <a href="#">About</a>
          </div>
          <div className="tab">
            <a href="#">Features</a>
          </div>
        </div>
      
    )
}

export default Tabs