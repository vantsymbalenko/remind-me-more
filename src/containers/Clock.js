import React, {Component} from 'react';
import {connect} from 'react-redux';
import update from '../actions/updateClock';
import ComponentClock from '../components/Clock';

class Clock extends Component{
	componentDidMount(){
		// this.timeID = setInterval(this.props.update, 1000);
	}
	componentWillUnmount(){
		clearInterval(this.timeID);
	}
	render(){
		console.log(this.props);
		return(
			<ComponentClock time = {this.props.nowTime.toString()}/>
		)
	}
}

const mapStateToProps = (state) => ({
	nowTime : state.clock
});

const mapDispatchToProps = {
	update : update
}
export default connect(mapStateToProps, mapDispatchToProps)(Clock);