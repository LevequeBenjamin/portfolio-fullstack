// ******************** reducers/index.js ******************** //

// imports
import { combineReducers } from 'redux';
import postReducer from './post.reducer';
import errorReducer from './error.reducer';
import userReducer from './user.reducer';

/* ******************** combineReducers ******************** */
export default combineReducers({
	postReducer,
	errorReducer,
	userReducer,
});
/* ******************** combineReducers end ******************** */
