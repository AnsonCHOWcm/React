import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";
import "./ComponentNavBar.css"; 
import logo from "./img/React_Logo.png";

const Navbar = () => {
return (
	<>
	<Nav className = "ComponentNavBar">
		<img className = "ComponentNavBarLogo" src = {logo} alt = "" ></img>
		<h1 className = "ComponentNavBarHeader1">React JS</h1>
		<NavMenu>
		<NavLink to="/" activeStyle>
			Homepage
		</NavLink>
		<NavLink to="/notes" activeStyle>
			Notes
		</NavLink>
		<NavLink to="/notes-multipages" activeStyle>
			Notes-MultiPages
		</NavLink>
		<NavLink to="/proj_1" activeStyle>
			First Project
		</NavLink>
		<NavLink to="/proj_2" activeStyle>
			Second Project
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
