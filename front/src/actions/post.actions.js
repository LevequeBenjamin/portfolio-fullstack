// ******************** actions/post.actions.js ******************** //

// import
import axios from 'axios';

// const
export const GET_POSTS = 'GET_POSTS';

/* ******************** getPosts ******************** */
export const getPosts = () => {
	return dispatch => {
		return axios({
			method: 'get',
			url: 'http://localhost:5000/api/post',
			withCredentials: true,
		})
			.then(res => {
				dispatch({ type: GET_POSTS, payload: res.data });
			})
			.catch(err => console.log(err));
	};
};
/* ******************** getPosts end ******************** */
