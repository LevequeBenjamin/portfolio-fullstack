// ******************** components/projects/NewProject.js ******************** //

// imports
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/post.actions';
import { isEmpty } from '../Utils';
import AdminProject from './AdminProject';
import NewProjectForm from './NewProjectForm';

/* ******************** NewProject ******************** */
const NewProject = () => {
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
		<div className="admin-container">
			<h2>Un nouveau projet ?</h2>
			<NewProjectForm />
			<div className="admin-project-container">
				{!isEmpty(projects[0]) &&
					projects.map(project => {
						return <AdminProject project={project} key={project.id} />;
					})}
			</div>
		</div>
	);
};
/* ******************** NewProject end ******************** */

// export
export default NewProject;
