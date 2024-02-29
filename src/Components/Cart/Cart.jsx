import React, { useState } from "react";
import "./Cart.css";
import Products from "../assets/Products";

function Cart() {
  const [cartItems, setCartItems] = useState([{}]);

  return (
    <>
      <h2>Cart Items</h2>
      <div></div>
      <div>
        <button>Checkout</button>
      </div>
    </>
  );
}

export default Cart;
