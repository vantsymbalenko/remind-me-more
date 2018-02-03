export default function clock(state = new Date(), action){
	switch (action.type) {
		case "UPDATE_CLOCK":
			return action.date;
		default:
			return state;
	}
}