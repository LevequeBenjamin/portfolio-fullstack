// ******************** reducers/user.reducer.js ******************** //

// imports
import {
	GET_USER,
} from '../actions/user.actions';

// const
const initialState = {};

/* ******************** userReducer ******************** */
export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case GET_USER:
			return action.payload;
		default:
			return state;
	}
}
/* ******************** userReducer end ******************** */