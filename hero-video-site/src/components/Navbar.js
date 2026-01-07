import React from "react";
import "./Home.css";
import logo from "../assets/logotipo.png";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Jalapeño Branding" />
            </div>
            <ul className="navbar-menu">
                <li><a href="#about">Quiénes somos</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact"className="contacto">Contacto</a></li>
                <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="navbar-icon" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
