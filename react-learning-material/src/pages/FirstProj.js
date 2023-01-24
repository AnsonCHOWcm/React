import React from 'react';
import Navbar from "./FirstProjComponent/Navbar";
import Main from "./FirstProjComponent/Main";
import "./FirstProjComponent/FirstProj_style.css"

const FirstProj = () => {
return (
	<body className = "FirstProjBody">
		<div className = "container">
		<Navbar/>
        <Main/>
		</div>
	</body>
);
};

export default FirstProj;
