let datePattern = /^[0-9]{2}:[0-9]{2}$/;
export default function add(time, task, id){
	if(!datePattern.test(time)){
		return {
			type: "SET_ERROR",
			payload: {
				time : "Time is invalid"
			}
		}
	}
	if(!task.length){
		return{
			type: "SET_ERROR",
			payload: {
				task :"Task field is empty"
			}
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