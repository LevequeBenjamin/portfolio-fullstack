import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import { isEmpty } from '../components/Utils';
import Fade from 'react-reveal/Fade';
import Projects from '../components/projects/Projects';

const ProjectPage = () => {
	// useState
	const [loadPost, setLoadPost] = useState(true);
	const projects = useSelector(state => state.postReducer);
	// dispatch
	const dispatch = useDispatch();

	// useEffect
	useEffect(() => {
		if (loadPost) {
			dispatch(getPosts());
			setLoadPost(false);
		}
	}, [loadPost, dispatch]);

	return (
		<div className="projectPage-container">
			<Fade bottom cascade>
				<div className="project-title">
					<h3>Mon portfolio</h3>
				</div>
				</Fade>
			<div className="project-container">
				{!isEmpty(projects[0]) &&
					projects.map(project => {
						return <Projects project={project} key={project.id} />;
					})}
			</div>
			
		</div>
	);
};

export default ProjectPage;
