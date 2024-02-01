import React from "react";
import "./Body.css";
import ShowItems from "./ShowItems";

function Body() {
  const filtermen = () => {};

  const filterwomen = () => {};

  return (
    <div className="body-container">
      <div className="Tittle-section">
        <h3>Our Products </h3>
      </div>
      <div className="Products-list">
        <div className="Item-toogle">
          <button onClick={filtermen}>Men</button>
          <button className="women-item" onClick={filterwomen}>
            Women
          </button>
        </div>
        <div className="Item-view">
          <div>
            <ShowItems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
