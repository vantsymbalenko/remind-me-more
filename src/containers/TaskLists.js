import React, {Component} from 'react';
import {connect} from 'react-redux';
import ComponentTaskLists from '../components/TaskList';
import deleteTask from '../actions/deleteTask';

class TaskLists extends Component{
	render(){		
		return(
			<ul>
			{this.props.tasks.map((item, index) => 
				<ComponentTaskLists 
					key    = {item.id} 
					id 	   = {item.id}
					time   = {item.time} 
					task   = {item.task} 
					delete = {this.props.delete}
				/>
			)}
			</ul>
		);
	}
}
const mapStateToProps = (state) =>{
	return{
		tasks : state.addDelete.tasks
	}
};

const  mapDispatchToProps = {
	delete : deleteTask
}

export default connect (mapStateToProps, mapDispatchToProps)(TaskLists);