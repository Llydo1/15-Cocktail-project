import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { loading, setLoading } = useGlobalContext();
  const [cocktail, setCocktail] = React.useState("a");
  const { productId: id } = useParams();

  useEffect(() => {
    const fetchCocktail = (async () => {
      try {
        setLoading(true);
        setCocktail(await (await fetch(url + id)).json());
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);
  console.log(cocktail);

  if (loading) return <Loading />;
  if (!cocktail)
    return <h2 className="section-title">no cocktail to display </h2>;
  return (
    <section className="section cocktail-section">
      <a href="/" className="btn btn-primary">
        back home
      </a>
      <h2> </h2>
      <div className="drink">
        <img src="" alt="" />
      </div>
      <div className="drink-info">
        <p className="drink-data"></p>
        <p className="drink-data"></p>
        <p className="drink-data"></p>
        <p className="drink-data"></p>
        <p className="drink-data"></p>
        <p className="drink-data"></p>
      </div>
    </section>
  );
};

export default SingleCocktail;
