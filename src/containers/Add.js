import React, {Component} from 'react';
import AddForm from './AddForm';
import {connect} from 'react-redux';
import setAddAccess from '../actions/setAddAccess';
import ComponentAdd from '../components/Add';

class Add extends Component{
	render(){
		return(
			<div className ="add">
				{!this.props.add ? <ComponentAdd setAccess = {this.props.setAccess}/> : <AddForm />}
			</div>
		);
	}
}
const mapStateToProps = (state) => ({
	add: state.addDelete.add
});

const mapDispatchToProps = {
	setAccess : setAddAccess
};

export default connect(mapStateToProps, mapDispatchToProps)(Add)