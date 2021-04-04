import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { isEmpty } from './Utils';

const NavProject = () => {
	// store
	const projects = useSelector(state => state.postReducer);

	return (
		<nav>
			<ul className="navProject-container">
				{!isEmpty(projects[0]) &&
					projects.map(project => (
						<NavLink exact to={`/#portfolio/${project.id}`}>link</NavLink>
					))}
			</ul>
		</nav>
	);
};

export default NavProject;
