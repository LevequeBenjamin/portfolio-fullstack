// ******************** actions/post.actions.js ******************** //

// import
import axios from 'axios';

// const
export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const DELETE_POST = 'DELETE_POST';

// errors
export const GET_POST_ERRORS = 'GET_POST_ERRORS';

/* ******************** getPosts ******************** */
export const getPosts = () => {
	return dispatch => {
		return axios({
			method: 'get',
			url: 'https://api-benjamin-codeur.herokuapp.com/api/post',
			withCredentials: true,
		})
			.then(res => {
				dispatch({ type: GET_POSTS, payload: res.data });
			})
			.catch(err => console.log(err));
	};
};
/* ******************** getPosts end ******************** */

/* ******************** addPost ******************** */
export const addPost = data => {
	return dispatch => {
		return axios({
			method: 'post',
			url: 'https://api-benjamin-codeur.herokuapp.com/api/post',
			data: data,
			withCredentials: true,
		}).then(res => {
			if (res.data.errors) {
				dispatch({ type: GET_POST_ERRORS, payload: res.data.errors });
			} else {
				dispatch({ type: GET_POST_ERRORS, payload: '' });
			}
		});
	};
};
/* ******************** addPost end ******************** */

/* ******************** deletePost ******************** */
export const deletePost = postId => {
	return dispatch => {
		return axios({
			method: 'delete',
			url: `https://api-benjamin-codeur.herokuapp.com/api/post/${postId}`,
			withCredentials: true,
		})
			.then(res => {
				dispatch({ type: DELETE_POST, payload: { postId } });
			})
			.catch(err => console.log(err));
	};
};
/* ******************** deletePost end ******************** */
