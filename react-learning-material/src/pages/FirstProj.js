import React from 'react';
import Navbar from "./FirstProjComponent/Navbar";
import Main from "./FirstProjComponent/Main";
import "./FirstProjComponent/FirstProj_style.css"

const FirstProj = () => {

	const [lightMode, setlightMode] = React.useState(false)

return (
	<body className = "FirstProjBody">
		<div className = "container">
		<Navbar
		lightMode = {lightMode}
		handleToggle = {setlightMode}/>
        <Main
		lightMode = {lightMode}/>
		</div>
	</body>
);
};

export default FirstProj;
