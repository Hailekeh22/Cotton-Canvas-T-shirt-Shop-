import React, { useState } from "react";
import "./Header.css";
import Logo from "../assets/Logotransparent.png";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const [count, setcount] = useState(0);

  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={Logo} />
        <p>Cotton Canvas</p>
      </div>
      <div className="cart">
        <button className="cart-container">
          <FaCartShopping size={"1rem"} /> <h4 className="cart-txt">Cart</h4>{" "}
          <div className="cart-count">{count}</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
