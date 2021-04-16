// ******************** components/projects/NewProjectForm.js ******************** //

// imports
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, getPosts } from '../../actions/post.actions';
import { isEmpty } from '../Utils';

/* ******************** NewProjectForm ******************** */
const NewProjectForm = () => {
	// useState
	const [isLoading, setIsLoading] = useState(false);
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [lienGithub, setLienGithub] = useState('');
	const [date, setDate] = useState('');
	const [stack, setStack] = useState('');
	const [file, setFile] = useState();
	const [imageUrl, setImageUrl] = useState(null);
	// store
	const userData = useSelector(state => state.userReducer);
	const error = useSelector(state => state.errorReducer.postErrors);
	// dispatch
	const dispatch = useDispatch();

	const handlePicture = e => {
		setImageUrl(URL.createObjectURL(e.target.files[0]));
		setFile(e.target.files[0]);
	};

	const handlePost = async () => {
		setIsLoading(true);
		if (title || content || file || lienGithub || date || stack) {
			// on crée un objet data
			const data = new FormData();
			data.append('userId', userData.id);
			data.append('content', content);
			data.append('title', title);
			data.append('lienGithub', lienGithub);
			data.append('date', date);
			data.append('stack', stack);
			if (file) data.append('file', file);

			await dispatch(addPost(data));
			dispatch(getPosts());
			cancelPost();
		} else {
			alert('Veuillez entrer un message');
		}
		setIsLoading(false);
	};

	// fonction qui permet de vider le formulaire
	const cancelPost = () => {
		setTitle('');
		setContent('');
		setLienGithub('');
		setDate('');
		setStack('');
		setFile('');
		setImageUrl('');
	};

	let stacks = stack.split(',');

	return (
		<div className="newpostForm-container">
			{isLoading ? (
				<i className="fas fa-spinner fa-pulse"></i>
			) : (
				<>
					<div className="post-form">
						<div className="previ-container">
							<div className="form-flex">
								<div className="form-relative">
									<label htmlFor="title">title</label>
									<textarea
										name="title"
										id="title"
										onChange={e => setTitle(e.target.value)}
										value={title}
									/>
								</div>
								<div className="form-relative">
									<label htmlFor="content">content</label>
									<textarea
										name="content"
										id="content"
										onChange={e => setContent(e.target.value)}
										value={content}
									/>
								</div>
								<div className="form-relative">
									<label htmlFor="lienGithub">lienGithub</label>
									<textarea
										name="lienGithub"
										id="lienGithub"
										onChange={e => setLienGithub(e.target.value)}
										value={lienGithub}
									/>
								</div>
								<div className="form-relative">
									<label htmlFor="date">date</label>
									<textarea
										name="date"
										id="date"
										onChange={e => setDate(e.target.value)}
										value={date}
									/>
								</div>
								<div className="form-relative">
									<label htmlFor="stack">stack</label>
									<textarea
										name="stack"
										id="stack"
										onChange={e => setStack(e.target.value)}
										value={stack}
									/>
								</div>
							</div>
							{title || content || imageUrl || lienGithub || date || stack ? (
								<li className="card-container">
									<div className="project">
										<div className="img-container">
											<img src={imageUrl} alt="" />
										</div>
										<div className="description-container">
											<h3>{title}</h3>
											<h4>{date}</h4>
											<div className="stack-container">
												{stacks.map(techno => {
													return (
														<h5 className={techno} key={techno}>
															{techno}
														</h5>
													);
												})}
											</div>
											<p>{content}</p>
										</div>
										<a
											href={lienGithub}
											target="_blank"
											rel="noopener noreferrer"
											className="lien-container"
										>
											<span className="button">code source</span>
										</a>
									</div>
								</li>
							) : null}
						</div>
						<div className="footer-form">
							<div className="icons">
								<img src="./img/icons/picture.svg" alt="img" />
								<input
									type="file"
									id="file-upload"
									name="file"
									accept=".jpg, .jpeg, .png"
									onChange={e => handlePicture(e)}
								/>
							</div>
							{!isEmpty(error.format) && (
								<p className="error">{error.format}</p>
							)}
							{!isEmpty(error.maxSize) && (
								<p className="error">{error.maxSize}</p>
							)}
							{!isEmpty(error.errorContent) && (
								<p className="error">{error.errorContent}</p>
							)}
							<div className="btn-newPost">
								{file && (
									<button onClick={() => setImageUrl('')}>
										Supprimer image
									</button>
								)}
								<button className="send" onClick={handlePost}>
									Envoyer
								</button>
							</div>
						</div>
					</div>
				</>
			)}
		</div>
	);
};
/* ******************** NewProject end******************** */

// export
export default NewProjectForm;
