import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { loading, setLoading } = useGlobalContext();
  const [cocktail, setCocktail] = React.useState("a");
  const { productId: id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const { drinks } = await (await fetch(url + id)).json();
        if (drinks) {
          const drink = drinks[0];
          drink.ingredients = [];
          drink.measures = [];
          for (let prop in drink) {
            if (!drink[prop]) {
              delete drink[prop];
              continue;
            }
            if (prop.includes("Ingredient")) {
              drink.ingredients = [...drink.ingredients, drink[prop]];
              delete drink[prop];
              continue;
            }
            if (prop.includes("Measure")) {
              drink.measures = [...drink.measures, drink[prop]];
              delete drink[prop];
              continue;
            }
          }
          delete drink.strInstructionsDE;
          delete drink.strInstructionsES;
          delete drink.strInstructionsIT;
          setCocktail(drink);
        } else setCocktail(null);
      } catch (error) {
        console.log();
      } finally {
        setLoading(false);
      }
    })();
    window.scrollTo(0, 0);
  }, [id, setLoading]);

  if (loading) return <Loading />;
  if (!cocktail)
    return <h2 className="section-title">no cocktail to display </h2>;

  return (
    <section className="section cocktail-section">
      <a href="/" className="btn btn-primary">
        back home
      </a>
      <h2 className="section-title">{cocktail.strDrink}</h2>
      <div className="drink">
        <div>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
        </div>
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {cocktail.strDrink}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {cocktail.strCategory}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {cocktail.strAlcoholic}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {cocktail.strGlass}
          </p>

          <span className="drink-data">Ingredients: </span>
          <ul>
            {cocktail?.ingredients?.map((item, index) => {
              return (
                <li key={index}>
                  - {cocktail?.measures[index] ? cocktail.measures[index] : ""}
                  {item}
                </li>
              );
            })}
          </ul>
          <ul></ul>

          <p>
            <span className="drink-data">Instructions: </span>
            {cocktail.strInstructions}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
