export default function updateClock(){
	return {
		type: "UPDATE_CLOCK",
		date : new Date()
	}
}