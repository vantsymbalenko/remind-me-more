import React, {Component} from 'react';


export default class TaskLists extends Component{
	delete = (e) => {
		e.preventDefault();
		this.props.delete(this.props.id);

	}
	render(){
		return(
			<li>
				<span>{this.props.time.toString()}</span>
				{this.props.task} 
				<button onClick = {this.delete}>Delete</button>
			</li>
		);
	}
}
