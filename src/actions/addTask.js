export default function add(time, task, id){
	if(!task || !time){
		return {
			type: "SET_ERROR",
			payload: "Error, invalid data"
		}
	}
	return{
		type: "ADD_TASK",
		payload:{
			id: id,
			time: time,
			task: task
		}
	}
}