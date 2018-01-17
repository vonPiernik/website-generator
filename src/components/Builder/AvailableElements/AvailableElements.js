import React, { Component } from 'react';

// import connect
import { connect } from 'react-redux'

// import actions
import addSection from '../../../actions/builderActions.js'

class AvailableElements extends Component {
	render() {
		return (
	      <div className="Builder">
	        <p>Dostępne elementy: </p>
					<button 
						disabled={this.props.addedImportantElements.navbar} 
						onClick={() => {this.props.addSection('navbar')}}>Nawigacja</button>

					<button 
						onClick={() => {this.props.addSection()}}>Sekcja</button>

					<button 
						disabled={this.props.addedImportantElements.footer} 
						onClick={() => {this.props.addSection('footer')}}>Stopka</button>
	      </div>
	    );
	}
}

const mapStateToProps = (state) => {
	return {
		addedImportantElements: state.builder.addedImportantElements
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addSection: (el = 'section') => {
			dispatch(addSection(el))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(AvailableElements);
