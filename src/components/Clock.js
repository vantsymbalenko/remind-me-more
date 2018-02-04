import React, {Component} from 'react';
import '../css/clock.css';

export default class Clock extends Component{
	render(){
		return(
			<div className="clock">
				<div className="layer"></div>
				{this.props.time}
			</div>
		)
	}
}
