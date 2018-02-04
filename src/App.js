import React, { Component } from 'react';

import Clock from './containers/Clock';
import TaskLists from './containers/TaskLists';
import Add from './containers/Add';

import './css/app.css';

class App extends Component {
  render() {
    return (
		<div className = "container">
			<div className="wrapper">
		    	<Clock />
		    	<TaskLists />
		    	<Add />
	    	</div>
		</div>
    );
  }
}

export default App;
