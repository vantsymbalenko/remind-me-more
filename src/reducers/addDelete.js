let arr = [new Date(), new Date(), new Date()];
arr[0].setMinutes(arr[0].getMinutes() + 5);
arr[1].setMinutes(arr[1].getMinutes() + 30);
arr[2].setHours(arr[2].getHours() + 1);

let initialState = {
	add: false,
	tasks : [
		{id: 1, time: arr[0].toLocaleString("ru",{hour:"numeric", minute:"numeric"}), task : 'Some text 1'},
		{id: 2, time: arr[1].toLocaleString("ru",{hour:"numeric", minute:"numeric"}), task : 'Some text 2'},
		{id: 3, time: arr[2].toLocaleString("ru",{hour:"numeric", minute:"numeric"}), task : 'Some text 3'}
	]	
};
export default function addDelete(state = initialState, action){
	const {type, payload} = action;
	switch (type) {
		case "ADD_TASK":{
			return {
				...state,
				add : !state.add,
				tasks : [...state.tasks, payload].sort( (a,b) => a.time > b.time ? true : false)
			};
		}
		case "DELETE_TASK" :{ 
			return{
				...state,
				tasks:[...state.tasks.filter((task) =>task.id !== payload )]
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