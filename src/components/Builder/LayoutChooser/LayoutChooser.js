import React, { Component } from 'react';

// import styles
import './LayoutChooser.css'
// import connect
import { connect } from 'react-redux'

// import actions
import addSection, { changeSectionLayout } from '../../../actions/builderActions.js'

class LayoutChooser extends Component {
    constructor(props){
        super(props)        
    }
	render() {
        if (this.props.activeElement.index !== null) {
            return (
            <div className="LayoutChooser">
                <h3>Wybierz układ: </h3>
                

				{this.props.activeElement.availableLayouts
                .map((element, index) =>
                    <label key={ "layout-option-" + index }>
                        <input 
                            type="radio" name="layout" value={element.slug}  
                            checked={ element.slug === this.props.activeElement.layout && 'true' } 
                            onChange={() => this.props.changeSectionLayout(this.props.activeElement.index,element.slug)} />
                        { element.name }
                    </label>
                )}
                

            </div>
            );
        } else {
            return (
                <div className="LayoutChooser">
                    <h3>Wybierz układ: </h3>		
                    <small>Wybierz element strony, aby dostosować jego układ </small>					
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => {
	return {
		activeElement: state.builder.activeElement,
		elements: state.builder.elements
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addSection: (el = 'section') => {
			dispatch(addSection(el))
        },
        changeSectionLayout(index, layout = 'default'){
            dispatch(changeSectionLayout(index,layout))
        }
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutChooser);
