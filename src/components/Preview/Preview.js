import React, { Component } from 'react';

// import styles
import './Preview.css';

// import connect
import { connect } from 'react-redux'


// import components
import Section from './Elements/Section/Section'

class Preview extends Component {
	render() {
		if (this.props.elements[0]) {
			return (
				<div className="Preview">
					{this.props.elements
					.sort(function(a,b) { return a.weight - +b.weight })
					.map((element, index) =>

							<Section  
								key={index}
								index={index} 
								element={element} />
							
					)}
				</div>
			);
		} else {
			return (
				<div className="Preview">
					<p>Aby rozpocząć budowanie strony wybierz jeden z dostępnych elementów.</p>
				</div>
			)
		}
	}
}
const mapStateToProps = (state) => {
	return {
		elements : state.builder.elements
	}
}

export default connect(mapStateToProps,null)(Preview);