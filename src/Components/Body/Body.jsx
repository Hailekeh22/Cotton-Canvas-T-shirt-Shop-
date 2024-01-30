import React from "react";
import "./Body.css";
import ShowItems from "./ShowItems";

function Body() {
  return (
    <div className="body-container">
      <div className="Tittle-section">
        <h3>Our Products </h3>
      </div>
      <div className="Products-list">
        <div className="Item-toogle">
          <button>Men</button>
          <button className="women-item">Women</button>
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
