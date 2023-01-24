import React from "react";
import img_set from "./img/img_set.jpg";

const Hero = () => {
    return (
        <section className = "SecondProjHero">
            <img src = {img_set} alt = "" className = "hero--photo"/>
            <h1 className="hero--header">Online Experience</h1>
            <p classNme = "hero--text">Join unique interactive led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    );
};

export default Hero;