// ******************** components/projects/AdminProject.js ******************** //

// imports
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../actions/post.actions';

/* ******************** AdminProject ******************** */
const AdminProject = ({ project }) => {
	// useState
	const [isLoading, setIsLoading] = useState(false);
	// dispatch
	const dispatch = useDispatch();

	// fonction qui permet de supprimer un post
	const deleteQuote = async () => {
		setIsLoading(true);
		await dispatch(deletePost(project.id));
	};

	return (
		<div className="project-admin">
			<div className="img-container">
				<img src={project.imageUrl} alt={project.title} />
			</div>
			<div className="description-container">
				<h3>{project.title}</h3>
				<h4>{project.date}</h4>
				<p>{project.content}</p>
			</div>
			<div className="update-project">
				{isLoading ? (
					<i className="fas fa-spinner fa-pulse"></i>
				) : (
					<div
						onClick={() => {
							if (
								window.confirm('Voulez-vous vraiment supprimer ce projet ?')
							) {
								deleteQuote();
							}
						}}
					>
						<img src="./img/icons/trash.svg" alt="trash" />
					</div>
				)}
			</div>
		</div>
	);
};
/* ******************** AdminProject ******************** */

// export
export default AdminProject;
