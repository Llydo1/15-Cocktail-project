import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchTerm = React.useRef(null);
  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchTerm}
            onChange={() => setSearchTerm(searchTerm.current.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
