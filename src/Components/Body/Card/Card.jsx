import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card-container">
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={props.image}></img>
        </div>
        <div className="Card-Content">
          <h3>{props.name}</h3>
          <p>{props.info}</p>
          <button className="addtocart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
