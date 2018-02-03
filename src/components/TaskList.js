import React, {Component} from 'react';


export default class TaskLists extends Component{
	render(){
		return(
			<li><span>{this.props.time.toString()}</span>{this.props.task}</li>
		);
	}
}
