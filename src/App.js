import React, { Component } from 'react';
import Clock from './containers/Clock';
import TaskLists from './containers/TaskLists';
import Add from './containers/Add';

class App extends Component {
  
  render() {
    return (
		<div className = "container">
	    	<Clock />
	    	<TaskLists />
	    	<Add />
		</div>
    );
  }
}

export default App;
