import React from "react";
import "./Card.css";
import Img1 from "../Card/M1.jpg";

function Card() {
  return (
    <div className="card-container">
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={Img1}></img>
        </div>
        <div className="Card-Content">
          <h3>White Tshirt</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className="addtocart-button">Add to Cart</button>
        </div>
      </div>
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={Img1}></img>
        </div>
        <div className="Card-Content">
          <h3>White Tshirt</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className="addtocart-button">Add to Cart</button>
        </div>
      </div>
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={Img1}></img>
        </div>
        <div className="Card-Content">
          <h3>White Tshirt</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className="addtocart-button">Add to Cart</button>
        </div>
      </div>
      <div className="Card-item">
        <div className="Card-image">
          <img className="img-item" src={Img1}></img>
        </div>
        <div className="Card-Content">
          <h3>White Tshirt</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
          <button className="addtocart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
