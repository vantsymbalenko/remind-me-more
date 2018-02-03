let initialState = {date : new Date().toLocaleString("ru", {hour: "numeric", minute: "numeric", second:"numeric"})};

export default function clock(state = initialState, action){
	switch (action.type) {
		case "UPDATE_CLOCK":
			return action.payload;
		default:
			return state;
	}
}