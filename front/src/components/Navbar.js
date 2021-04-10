// ******************** components/Navbar.js ******************** //

// imports
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

/* ******************** Navbar ******************** */
const Navbar = () => {
	// id de l'utilisateur connecté
	const uid = useContext(UidContext);
	return (
		<nav className="navbar">
			<ul className="nav-container">
				<NavLink exact to="/" activeClassName="navActive">
					<div className="logo">
						<img src="./img/icons/home.svg" alt="home" />
					</div>
				</NavLink>
				<div className="page">
					<NavLink exact to="/project" activeClassName="navActive">
						<div>
							<h3>Portfolio</h3>
						</div>
					</NavLink>
					<NavLink exact to="/contact" activeClassName="navActive">
						<div>
							<h3>Contact</h3>
						</div>
					</NavLink>
					{uid && (
						<>
							<Logout />
							<NavLink exact to="/admin" activeClassName="navActive"><div>
							<h3>Admin</h3>
						</div></NavLink>
						</>
					)}
				</div>
			</ul>
		</nav>
	);
};
/* ******************** Navbar end ******************** */

// export
export default Navbar;
