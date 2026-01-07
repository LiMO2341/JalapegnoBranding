import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="hero-container">
      <video className="hero-video" autoPlay muted loop  >
        <source src="/videos/hero-video.webm" type="video/webm" />
        Tu navegador no soporta video HTML5.
      </video>
      <div className="hero-overlay">
        <button className="hero-button" onClick={handleClick}>
          Conocer más
        </button>
      </div>
    </div>
  );
};

export default Hero;
