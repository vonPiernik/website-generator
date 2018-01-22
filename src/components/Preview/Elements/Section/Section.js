import React, { Component } from 'react';

// import connect
import { connect } from 'react-redux'

// import actions
import { removeSection, activateSection } from '../../../../actions/builderActions.js'


class Section extends Component {
	render() {

		return (
			<div className={'preview-element preview-' + this.props.element.name + ' preview-' + this.props.element.name + '-' + this.props.element.layout + ' active-' + this.props.element.active}>
				{this.props.element.name === 'navbar' &&
					<div className="layout">
						<span className="brand"></span>

						<span className="menu-item"></span>
						<span className="menu-item"></span>
						<span className="menu-item"></span>
					</div>
				}

				<div className="preview-action-buttons">
					<button onClick={() => {this.props.removeSection(this.props.index, this.props.element.name) }}> Usuń element </button>
					<button onClick={() => {this.props.activateSection(this.props.index,this.props.element.name) }}> Wybierz układ </button>
				</div>
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
