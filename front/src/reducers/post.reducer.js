// ******************** reducers/post.reducer ******************** //

// imports
import { GET_POSTS } from '../actions/post.actions';

// const
const initialState = {};

/* ******************** postReducer ******************** */
export default function postReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POSTS:
			return action.payload;

		default:
			return state;
	}
}
/* ******************** postReducer end ******************** */
