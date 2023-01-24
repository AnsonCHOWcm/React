import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<>
	<Nav>
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
			First Projects
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
