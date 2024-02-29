import React, { useState } from "react";
import "./Cart.css";
import Products from "../assets/Products";

function Cart() {
  const [cartItems, setCartItems] = useState([{}]);

  return (
    <div className="cartcontainer">
      <h2 className="cartheader">Cart Items</h2>
      <div className="cartitems">
        <div className="content">hello</div>
        <div className="quantitycontrol">
          <p>3</p>
          <button className="cartbtn">+</button>
          <button className="cartbtn">-</button>
        </div>
      </div>
      <div className="cartitems">
        <div className="content">hello</div>
        <div className="quantitycontrol">
          <p>3</p>
          <button className="cartbtn">+</button>
          <button className="cartbtn">-</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
