// ******************** actions/user.actions ******************** //
// imports
import axios from 'axios';

// const
export const GET_USER = 'GET_USER';

// errors
export const GET_USER_ERRORS = 'GET_USER_ERRORS';

/* ******************** getUser ******************** */
export const getUser = uid => {
	return dispatch => {
		return axios({
			method: 'get',
			url: `http://localhost:5000/api/user/${uid}`,
			withCredentials: true,
		})
			.then(res => {
				dispatch({ type: GET_USER, payload: res.data });
			})
			.catch(err => console.log(err));
	};
};
/* ******************** getUser end ******************** */
