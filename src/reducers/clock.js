let initialState = {date : new Date(2018,2,4,20,30).toLocaleString("ru", {hour: "numeric", minute: "numeric", second:"numeric"})};

export default function clock(state = initialState, action){
	switch (action.type) {
		case "UPDATE_CLOCK":
			return action.payload;
		default:
			return state;
	}
}