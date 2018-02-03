import React, {Component} from 'react';

export default  class Add extends Component{
	render(){
		return(
			<div className ="add">
				 <button onClick = {this.props.setAccess}>Add</button> 
			</div>
		);
	}
}
