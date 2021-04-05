import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import { isEmpty } from '../components/Utils';
import Project from './projects/Project';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const Portfolio = () => {
	// useState
	const [loadPost, setLoadPost] = useState(true);
	const [current, setCurrent] = useState(0);
	const projects = useSelector(state => state.postReducer);
	const length = projects.length;
	// dispatch
	const dispatch = useDispatch();

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	// useEffect
	useEffect(() => {
		if (loadPost) {
			dispatch(getPosts());
			setLoadPost(false);
		}
	}, [loadPost, dispatch]);

	return (
		<div className="project-container">
			<FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
			<FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
			{!isEmpty(projects[0]) &&
				projects.map((project, index) => {
					return (
						<div
							className={index === current ? 'slide active' : 'slide'}
							key={index}
						>
							{index === current && (
								<Project project={project} key={project.id} />
							)}
						</div>
					);
				})}
		</div>
	);
};

export default Portfolio;
