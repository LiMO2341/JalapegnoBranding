import React from "react";
import Navbar from "./Navbar";
import quienesImg from "../assets/fueguardo-quienes-somos.png";
import ClientComments from "./ClientComments";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <section className="hero-section">
  <div className="hero-content">
    <div className="hero-text">
     <h1 className="titulo-somos">
  <span className="linea-uno">QUIÉNES</span>
  <br />
  <span className="linea-dos">SOMOS 🔥</span>
</h1>
      <p className="parrafo-somos">
        The Jalapeño Branding nació cuando un grupo de amigos se dio cuenta de que muchas ideas buenas se quedaban en el aire por no tener una identidad que las hiciera brillar, y tres doritos después... decidimos juntarnos y aterrizar el proyecto para darles voz y estilo a esos proyectos con alma.
      </p>
    </div>

    <div className="about-image">
      <img src={quienesImg} alt="Equipo Jalapeño Branding" />
    </div>
  </div>
</section>


      <section className="about-section" id="about">
        <p>
          <span className="highlight-red">Transformamos energía creativa</span>{" "}
          en <span className="highlight-yellow">estrategias con propósito.</span>{" "}
          Combinamos pasión, crecimiento, <span className="highlight-pink">empatía</span>,{" "}
          optimismo e <span className="highlight-green">innovación</span>, para ayudar a cada cliente a {" "}
          <span className="highlight-deepyellow">convertirse en su mejor versión.</span>
        </p>
      </section>



      <ClientComments />
      <Footer />
    </div>
  );
};

export default Home;
