import React from 'react';

const Project = ({ project }) => {
	let stacks = project.stack.split(',');

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
		</>
	);
};

export default Project;
