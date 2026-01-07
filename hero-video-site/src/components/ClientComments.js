import React, { useState } from "react";
import "./Home.css";

const comments = [
  "Excelente servicio, me ayudaron a potenciar mi marca.",
  "Creatividad al 100%, súper recomendados.",
  "El equipo de Jalapeño supo captar mi esencia.",
  "Trabajo impecable y gran comunicación.",
  "Mi empresa creció después de su estrategia digital.",
];

const ClientComments = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  const handleScroll = (direction) => {
    if (direction === "up") {
      setVisibleIndex((prev) => (prev > 0 ? prev - 1 : comments.length - 1));
    } else {
      setVisibleIndex((prev) => (prev + 1) % comments.length);
    }
  };

  return (
    <section className="comments-section" id="comments">
      <h2>Qué dicen los clientes</h2>
      <div className="comments-container">
        <div className="comment-box">
          {comments[visibleIndex]}
        </div>
      </div>
      <div className="scroll-buttons">
        <button onClick={() => handleScroll("up")}>▲</button>
        <button onClick={() => handleScroll("down")}>▼</button>
      </div>
    </section>
  );
};

export default ClientComments;
