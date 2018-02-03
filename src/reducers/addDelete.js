let initialState = {
	add: false,
	tasks : [
		{id: 1, time: new Date().toString(), task : 'Some text 1'},
		{id: 2, time: new Date().toString(), task : 'Some text 2'},
		{id: 3, time: new Date().toString(), task : 'Some text 3'}
	]	
};
export default function addDelete(state = initialState, action){
	const {type, payload} = action;
	switch (type) {
		case "ADD_TASK":{
			return {
				...state,
				tasks : [...state.tasks, payload]
			};
		}
		case "DELETE_TASK" :{ 
			return{
				...state,
				tasks:[...state.tasks.filter((task) =>task.id !=payload )]
			}
		}
		case "SET_ACSSES" : {
			return {
				...state,
				add: !state.add
			}
		}
		default:
			return state;
	}
}