import React from 'react';
import { dateParser } from '../Utils';

const Project = ({ project }) => {
	return (
		<div className="project">
      <div className='project-content'>
        <h1>{project.title}</h1>
        <p>{dateParser(project.createdAt)}</p>
      </div>
			<div className="img-content">
				<div className="img-container hover">
					<span>
						<h3>{project.title}</h3>
            <p>{project.content}</p>
					</span>
					<img src={project.imageUrl} alt={project.title} />
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
			</div>
		</div>
	);
};

export default Project;
