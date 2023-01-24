import React from "react";
import airbnb_Logo from "./img/airbnb_logo.png";
import "./SecondProj_style.css";


const Navbar = () => {
    return (
    <nav className = "SecondProjNavBar">
        <img src = {airbnb_Logo} alt = "" />
        <h3> </h3>
        <h4> React Course - Project 2 </h4>
    </nav>
    );
};

export default Navbar;