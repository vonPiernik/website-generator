import React, { Component } from 'react';

// import styles
import './Builder.css';

// import components
import AvailableElements from './AvailableElements/AvailableElements'
import LayoutChooser from './LayoutChooser/LayoutChooser'
import Generator from './Generator'

class Builder extends Component {
	render() {
		return (
			<div className="Builder">
				<AvailableElements />

				<LayoutChooser />


				<Generator />
			</div>
	    );
	}
}


export default Builder;
