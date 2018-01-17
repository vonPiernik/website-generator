import React, { Component } from 'react';

// import styles
import './Builder.css';

// import components
import AvailableElements from './AvailableElements/AvailableElements'
import LayoutChooser from './LayoutChooser/LayoutChooser'

class Builder extends Component {
	render() {
		return (
			<div className="Builder">
				<AvailableElements />

				<LayoutChooser />
			</div>
	    );
	}
}


export default Builder;
