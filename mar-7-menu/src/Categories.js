import React from "react";

const Categories = ({category,filteritems}) => {
    return(
        <div className="btn-container">
            
                {
                    category.map((cats,index)=>{
                        return(
                            <button 
                            type="button"
                            className="filter-btn"
                            key={index}
                            onClick={()=>filteritems(cats)}
                            >
                                {cats}
                            </button>
                        )
                    })
                }
            
        </div>
    )
}
export default Categories