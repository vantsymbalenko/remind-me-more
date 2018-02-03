export default function errors(state = '', action){
	switch (action.type) {
		case "SET_ERROR":
			return action;
		default:
			return state;
	}
}