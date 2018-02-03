import {combineReducers} from 'redux';
import addDelete from './addDelete';
import errors from './errors';
import clock from './clock';

export default combineReducers({
	addDelete,
	errors,
	clock
});