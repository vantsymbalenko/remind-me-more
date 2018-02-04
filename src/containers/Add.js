import React, {Component} from 'react';
import {connect} from 'react-redux';

import AddForm from './AddForm';
import ComponentAdd from '../components/Add';

import setAddAccess from '../actions/setAddAccess';
import clearErrors from '../actions/clearErrors';

import '../css/add.css';

class Add extends Component{
	render(){
		return(
			<div className ="add">
				{!this.props.add ? 
					<ComponentAdd setAccess = {this.props.setAccess}/> : 
					<AddForm  clearErrors = {this.props.clearErrors}/>}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	add: state.addDelete.add
});

const mapDispatchToProps = {
	setAccess : setAddAccess,
	clearErrors : clearErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(Add)