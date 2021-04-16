// ******************** reducers/post.reducer ******************** //

// imports
import { DELETE_POST, GET_POSTS } from '../actions/post.actions';

// const
const initialState = {};

/* ******************** postReducer ******************** */
export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;

		case DELETE_POST:
			return state.filter(post => post.id !== action.payload.postId);

		default:
			return state;
	}
}
/* ******************** postReducer end ******************** */
