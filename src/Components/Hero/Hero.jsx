import React from "react";
import "./Hero.css";
import heroiimg from "../assets/HeroImg.png";

function Hero() {
  return (
    <div className="Hero-Section">
      <img className="hero-img" src={heroiimg}></img>
    </div>
  );
}

export default Hero;
