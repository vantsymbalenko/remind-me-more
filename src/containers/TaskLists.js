import React, {Component} from 'react';
import {connect} from 'react-redux';
import ComponentTaskLists from '../components/TaskList';

class TaskLists extends Component{
	render(){
		return(
			<ul>
			{this.props.tasks.map((item, index) => 
				<ComponentTaskLists key = {item.id} time = {item.time} task = {item.task} />
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

export default connect (mapStateToProps)(TaskLists);