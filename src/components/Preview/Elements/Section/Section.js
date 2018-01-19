import React, { Component } from 'react';

// import connect
import { connect } from 'react-redux'

// import actions
import { removeSection, activateSection } from '../../../../actions/builderActions.js'


class Section extends Component {
	render() {
    	return (
			<div className="Section">
        		{this.props.element} <strong>({this.props.index})</strong> 
				<button onClick={() => {this.props.removeSection(this.props.index, this.props.element) }}> Usun </button>
				<button onClick={() => {this.props.activateSection(this.props.index,this.props.element) }}> Wybierz układ </button>
		    </div>
	    );
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		removeSection: (index, el) => {
			dispatch(removeSection(index, el))
		},
		activateSection: (index,type) => {
			dispatch(activateSection(index,type))
		}
	}
}
export default connect(null,mapDispatchToProps)(Section);
