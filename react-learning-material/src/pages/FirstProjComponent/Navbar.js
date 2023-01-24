import React from "react";
import React_Logo from "../pagestyle/img/React_Logo.png";
import "./FirstProjNavBar_style.css";

const Navbar = () => {
    return (
        <nav className = "FirstProjNavBar">
            <img src = {React_Logo} alt = "" />
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    );
};

export default Navbar;