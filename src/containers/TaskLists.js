import React, {Component} from 'react';
import {connect} from 'react-redux';
import ComponentTaskLists from '../components/TaskList';
import deleteTask from '../actions/deleteTask';
import '../css/taskList.css';

class TaskLists extends Component{
	render(){		
		return(
			<div className="task-list">
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
			</div>
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