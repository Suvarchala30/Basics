import React from "react";
import Loader from "../Loader";
import { useGlobalContext } from "../Context";
import Cocktail from "./Cocktail";

const CocktailList = ()=>{
const { cocktails,loading } = useGlobalContext()
if(loading){
    return <Loader />
}
if(cocktails.length<1){
    return(
        <div className="nocock">
            
                <h1>No matching contents found!!</h1>
            
        </div>
    )
}
    return(
        <div className="cocktail-container">
            <section className="title-section">
                <h1>Cocktails</h1>
            </section>
            <div className="cocktails-center">
                {
                    cocktails.map((item)=>{
                      return <Cocktail key={item.id} {...item} />
                    })
                }
            </div>
        </div>
    )
}
export default CocktailList
