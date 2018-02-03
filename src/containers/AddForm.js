import React, {Component} from 'react';
import {connect} from 'react-redux';
import addTask from '../actions/addTask';
import ComponentAddForm from '../components/AddForm';

class AddForm extends Component{
	componentWillMount  (){
		this.props.clearErrors();
	}
	render(){
		return(
			<ComponentAddForm 
				errors = {this.props.errors}
				add = {this.props.add} 
				id={this.props.id + 1}
			/>	
		);
	}
}
const mapStateToProps = (state) => ({
	errors: state.errors,
	id: state.addDelete.tasks.length + 1
});
const mapDispatchToProps = {
	add : addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);