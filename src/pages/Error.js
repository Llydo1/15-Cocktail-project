import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>Oops! its a dead end</h1>
        <Link to="/" className="btn btn-primary">
          Home page
        </Link>
      </div>
    </section>
  );
};

export default Error;
