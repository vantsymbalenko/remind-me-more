import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configurateStore(initialState){
	let store = createStore(
			rootReducer,
			compose(
				applyMiddleware(thunk),
				window.devToolsExtension ? window.devToolsExtension() : f => f
			)
		);
	return store;
}