import React from "react";
import SearchForm from "../Innerpages/Searchform";
import CocktailList from "../Innerpages/CocktailList";

const Home = ()=>{
    return(
       <div className="home-page">
           <SearchForm />
           <CocktailList />
       </div>
    )
}
export default Home