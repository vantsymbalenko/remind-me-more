export default function updateClock(){
	return {
		type: "UPDATE_CLOCK",
		payload:{
			date : new Date().toLocaleString("ru", {hour: "numeric", minute: "numeric", second: "numeric"})	
		}
	}
}