import React, {Component} from 'react';

export default  class AddForm extends Component{
	add = (e) => {
		e.preventDefault(); 
		console.log(this.time);
		console.log(this.task);

		this.props.add(this.time.value, this.task.value, this.props.id); 
	}
	render(){
		return(
			<div className ="add">
				<input type="time" placeholder = "dsa" ref = {(input) => {this.time = input;}}/>
				<input type = "text" placeholder ="Your plan" ref = {(input) => {this.task = input;}}/>
				<button onClick={this.add}>add</button>
			</div>
		);
	}
}
