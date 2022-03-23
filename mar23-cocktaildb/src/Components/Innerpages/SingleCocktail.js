import React, { useEffect, useState } from "react";
import Loader from "../Loader";
import { useParams, Link } from "react-router-dom";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();

        if (data.drinks) {
          console.log(data.drinks);
          const newcock = {
            name: data.drinks[0].strDrink,
            image: data.drinks[0].strDrinkThumb,
            info: data.drinks[0].strAlcoholic,
            category: data.drinks[0].strCategory,
            glass: data.drinks[0].strGlass,
          };
          setCocktail(newcock);
        } else {
          setCocktail(null);
        }
      } catch (err) {
          console.log(err)
      }
      setLoading(false)
    }
    getCocktail()
  },[id]);

  if(loading){
      return <Loader />
  }
  if(!cocktail){
      return <h2 className="section-title">no cocktail to display</h2>;
  }else{
     const {name, image, category, info, glass } = cocktail 
  return (
      <section className="subCock">
          <div className="button1">
           <Link to="/" className="btn btn-primary">
          Back home
        </Link>
        </div>
        <div className="subblock">
        <section className="title1">{name}</section>
        <div className="drink">
            <img src={image} alt={name} className="bigImage" />
            <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {name}
            </p>
            <p>
              <span className="drink-data">category :</span> {category}
            </p>
            <p>
              <span className="drink-data">info :</span> {info}
            </p>
            <p>
              <span className="drink-data">glass :</span> {glass}
            </p>
            </div>
        </div>
        </div>
      </section>
  )

}
};
export default SingleCocktail;
