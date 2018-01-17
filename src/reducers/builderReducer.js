const ADD = 'ADD_SECTION'
const REMOVE = 'REMOVE_SECTION'
const ACTIVATE = 'ACTIVATE_SECTION'

const initialState = {
	elements: [{
		name: 'section', 
		weight: 1, 
		layout: 'default'
	}],
	addedImportantElements: {},
	activeElement: null,
}

export default function reducer(state=initialState, action) {
	switch (action.type) {
		case ADD: {
			return { 
				...state, 
				elements: [...state.elements,  action.payload.element],
				addedImportantElements:  Object.assign({}, state.addedImportantElements, action.payload.addedImportantElements )
			};
		}
		case REMOVE: {
			return { 
				...state, 
				elements: state.elements.filter( function(el, index){
					return index !== action.payload.element.index
				}),
				addedImportantElements:  Object.assign({}, state.addedImportantElements, action.payload.addedImportantElements )
			};
		}
		case ACTIVATE: {
			return {
				...state, 
				activeElement: action.payload.index
			};
		}
		default: {
			return state;
		}
		
	}
}