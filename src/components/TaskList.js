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
				<span>{this.props.task}</span>
				<span>
					<button onClick = {this.delete}>
						<svg   viewBox="0 0 24 24">
							<path d="m 4 6 L 9 6 L 12 8 L 15 6 L 20 6 L 15 12 L 20 18 L 15 18 L 12 15 L 9 18 L 4 18 L 9 12 z"/>
						</svg>
					</button>
				</span>
			</li>
		);
	}
}
