import React, {Component} from 'react';

export default  class AddForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			time : ""
		};
	}

	add = (e) => {
		e.preventDefault(); 
		this.props.add(this.state.time, this.task.value, this.props.id); 
	}

	time = (e) => {
		let pattern = /^(([0-1]?[0-9]?)|(2?[0-3]?)):?([0-5]?[0-9]?)$/,
			value = e.target.value;
		
		if( value.length === 2 && 
			value[0] !== ":" && 
			value[1] !== ":" && 
			pattern.test(value+':')){
				this.setState({
					time: value + ":"
				});
		}else if(pattern.test(value)){
			this.setState({
				time: value
			});
		}	
	}

	render(){
		return(
			<div className ="add">
				<input 
					type="text" 
					placeholder = "Task time" 
					value = {this.state.time} 
					onChange = {this.time}
				/>
				<div>{this.props.errors.time || null}</div>
				<input 
					type = "text" 
					placeholder ="Your plan" 
					ref = {(input) => {this.task = input;}}
				/>
				<div>{this.props.errors.task || null}</div>
				<button onClick={this.add}>add</button>
			</div>
		);
	}
}
