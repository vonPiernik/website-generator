import React, { Component } from 'react';

// import styles
import './LayoutChooser.css'
// import connect
import { connect } from 'react-redux'

// import actions
import addSection from '../../../actions/builderActions.js'

class LayoutChooser extends Component {
    constructor(props){
        super(props)



        this.layouts = {
            navbar: [
                {
                    name: 'Domyślny układ',
                    slug: 'default'
                }
            ],
            section: [
                {
                    name: 'Domyślny układ',
                    slug: 'default'
                },
                {
                    name: 'Odwrócony',
                    slug: 'inverted'
                }
            ],
            footer: [
                {
                    name: 'Domyślny układ',
                    slug: 'default'
                },
                {
                    name: 'Duża stopka',
                    slug: 'big'
                },
                {
                    name: 'Wielka stopka',
                    slug: 'bigger'
                }
            ]
        }
    }
	render() {
        console.log(this)
        if (this.props.activeElement !== null) {
            var activeElementType = this.props.elements[this.props.activeElement]
            return (
            <div className="LayoutChooser">
                <h3>Wybierz układ: </h3>
                

				{this.layouts[activeElementType.name]
                .map((element, index) =>
                    <label key={ "layout-option-" + index }>
                        <input 
                            type="radio" name="layout" value={element.slug}  
                            defaultChecked={ element.slug==activeElementType.layout && 'true' }/>
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
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LayoutChooser);
