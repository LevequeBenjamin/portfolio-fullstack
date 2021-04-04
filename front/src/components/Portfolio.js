
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import { isEmpty } from '../components/Utils';
import NavProject from './NavProject';
import Project from './projects/Project';

const Portfolio = () => {
	// useState
	const [loadPost, setLoadPost] = useState(true);
	// dispatch
	const dispatch = useDispatch();
	// store
	const projects = useSelector(state => state.postReducer);

	// useEffect, infiny scoll
	useEffect(() => {
		if (loadPost) {
			dispatch(getPosts());
			setLoadPost(false);
		}
	}, [loadPost, dispatch]);

	return (
		<div className='project-container'>
			{!isEmpty(projects[0]) &&
				projects.map(project => <Project project={project} key={project.id} />)}
        <NavProject />
		</div>
	);
};

export default Portfolio;
