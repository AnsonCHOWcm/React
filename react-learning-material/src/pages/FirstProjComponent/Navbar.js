import React from "react";
import React_Logo from "../pagestyle/img/React_Logo.png";
import "./FirstProjNavBar_style.css";

const Navbar = (props) => {
    
    const mode = props.lightMode

    const handleChange = () => {
            props.handleToggle(prevlightMode => !prevlightMode)
    };

    return (
        <nav className = "FirstProjNavBar" style = {{backgroundColor : mode ? "white" : "#21222A"}}>
            <img src = {React_Logo} alt = "" />
            <h3>ReactFacts</h3>
            <h5 className = "Switch--Light" style = {{color : mode ? "#21222A" : "white"}}>Light</h5>
            <label className = "FirstProjNavBar--switch">
                <input type = "checkbox"
                       checked = {!props.lightMode}
                       onChange = {handleChange}
                       ></input>
                <span className = "FirstProjNavBar--slider_round" ></span>
            </label>
            <h5 className = "Switch--Dark" style = {{color : mode ? "#21222A" : "white"}}>Dark</h5>
            <h4 className = "FirstProjNavBar--h4" style = {{color : mode ? "#21222A" : "white"}}>React Course - Project 1</h4>
        </nav>
    );
};

export default Navbar;