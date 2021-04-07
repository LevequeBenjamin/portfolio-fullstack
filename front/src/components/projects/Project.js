import React from 'react';
import { NavLink } from 'react-router-dom';

const Project = ({ project }) => {
	return (
		<>
			<div className="project">
				{/* <div className='project-content'>
        <h1>{project.title}</h1>
        <p>{project.date}</p>
      </div> */}
				<div className="img-container">
					<img src={project.imageUrl} alt={project.title} />
				</div>
				<div className="description-container">
					<h3>{project.title}</h3>
					<h4>{project.date}</h4>
					<p>{project.content}</p>
				</div>
				<NavLink to='/project' exact className='lien-container'>
            <span className='button'>plus d'infos</span>
          </NavLink>
			</div>
			<div className="button-container">
				<a
					href={project.lienGithub}
					target="_blank"
					rel="noopener noreferrer"
					className="hover"
				>
					<span className="button">code source</span>
				</a>
			</div>
		</>
	);
};

export default Project;
