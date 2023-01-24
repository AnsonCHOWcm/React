import React from "react";
import Main from "./SecondProjComponent/Main";
import NavBar from "./SecondProjComponent/Navbar";

const SecondProj = () => {
    return (
        <body className = "SecondProjBody">
		<h1 className = "PageHeader">React Js</h1>
		<div className = "container">
		<NavBar/>
        <Main/>
		</div>
	</body>
    );
};

export default SecondProj;