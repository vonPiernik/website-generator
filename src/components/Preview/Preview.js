import React, { Component } from 'react';

// import styles
import './Preview.css';

// import connect
import { connect } from 'react-redux'


// import components
import Section from './Elements/Section/Section.js'

class Preview extends Component {
	render() {
    	return (
			<div className="Preview">
				{this.props.elements
				.sort(function(a,b) { return a.weight - +b.weight })
				.map((element, index) =>
					<div className="Section-wrap" key={index}>
						<Section  
							index={index} 
							element={element.name} />

						
					</div>
			    )}
		    </div>
	    );
	}
}
const mapStateToProps = (state) => {
	return {
		elements : state.builder.elements
	}
}

export default connect(mapStateToProps,null)(Preview);