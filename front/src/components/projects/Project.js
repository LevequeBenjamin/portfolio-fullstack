// ******************** components/projects/Project.js ******************** //

// imports
import React from 'react';

/* ******************** Project ******************** */
const Project = ({ project }) => {
	let stacks = project.stack.split(',');

	return (
		<div className="project">
			<div className="img-container">
				<img src={project.imageUrl} alt={project.title} />
			</div>
			<div className="description-container">
				<h3>{project.title}</h3>
				<h4>{project.date}</h4>
				<div className="stack-container">
					{stacks.map(techno => {
						return (
							<h5 className={techno} key={techno}>
								{techno}
							</h5>
						);
					})}
				</div>
				<p>{project.content}</p>
			</div>
			<a
				href={project.lienGithub}
				target="_blank"
				rel="noopener noreferrer"
				className="lien-container"
			>
				<span className="button">code source</span>
			</a>
		</div>
	);
};
/* ******************** Project end ******************** */

// export
export default Project;
