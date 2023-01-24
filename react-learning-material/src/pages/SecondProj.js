import React from "react";
import NavBar from "./SecondProjComponent/Navbar";
import Hero from "./SecondProjComponent/Hero";
import Cards from "./SecondProjComponent/Cards";
import data from "./SecondProjComponent/data";
import "./SecondProjComponent/SecondProj_style.css";

const SecondProj = () => {
    const dataElements = data.map(item => {
        return <Cards 
               item = {item}
               />
    }
    )
    return (
    <body className = "SecondProjBody">
		<div className = "container">
		<NavBar/>
        <Hero />
        <div className = "CardContainers">
        {dataElements}
        </div>
		</div>
	</body>
    );
};

export default SecondProj;