// ******************** components/Navbar.js ******************** //

// imports
import React from 'react';
import { NavLink } from 'react-router-dom';

/* ******************** Navbar ******************** */
const Navbar = () => {
	return (
		<nav className='navbar'>
			<ul className="nav-container">
				<NavLink exact to="/">
					<div className="logo">
						<img src="./img/icons/home.svg" alt="home" />
					</div>
				</NavLink>
				<br />
				<a href="#presentation">
					<div>
						<h3>Presentation</h3>
					</div>
				</a>
				<br />
				<a href="#parcours">
					<div>
						<h3>Parcours</h3>
					</div>
				</a>

				<br />
				<a href="#portfolio">
					<div>
						<h3>Portfolio</h3>
					</div>
				</a>
				<br />
				<a href="#contact">
					<div>
						<h3>Contact</h3>
					</div>
				</a>
			</ul>
		</nav>
	);
};
/* ******************** Navbar end ******************** */

// export
export default Navbar;
