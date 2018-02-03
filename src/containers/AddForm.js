import React, {Component} from 'react';
import {connect} from 'react-redux';
import addTask from '../actions/addTask';
import ComponentAddForm from '../components/AddForm';

class AddForm extends Component{
	render(){
		return(
			<ComponentAddForm error = {this.props.errors} add = {this.props.add} id={this.props.id + 1}/>	
		);
	}
}
const mapStateToProps = (state) => ({
	errors: state.errors.text,
	id: state.addDelete.tasks[state.addDelete.tasks.length-1].id
});
const mapDispatchToProps = {
	add : addTask
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);