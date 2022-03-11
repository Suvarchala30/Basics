import React from "react";

const Keypad= (props)=>{
    return(
        <div className="keypad">
            {props.children}
        </div>
    )
}
export default Keypad