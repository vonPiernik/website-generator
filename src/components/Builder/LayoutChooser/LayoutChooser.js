import React, { Component } from 'react';

// import connect
import { connect } from 'react-redux'

// import actions
import addSection from '../../../actions/builderActions.js'

class LayoutChooser extends Component {
    constructor(props){
        super(props)



        this.layouts = {
            navbar: [
                'default'
            ],
            section: [
                'default'
            ],
            footer: [
                'default'
            ]
        }
    }
	render() {
        console.log(this.layouts)
        if (this.props.activeElement !== null) {
            return (
            <div className="LayoutChooser">
                <p>Wybierz układ: </p>		
                <label>
                    <input type="radio" name="layout" value="default" />
                    Default
                </label>
                <label>
                    <input type="radio" name="layout" value="layout-1" />
                    Layout 1
                </label>
                <label>
                    <input type="radio" name="layout" value="layout-2" />
                    Layout 2
                </label>

            </div>
            );
        } else {
            return (
                <div className="LayoutChooser">
                    <p>Wybierz układ: </p>		
                    <small>Wybierz element strony, aby dostosować jego układ </small>					
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
	return {
		activeElement: state.builder.activeElement
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addSection: (el = 'section') => {
			dispatch(addSection(el))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutChooser);
