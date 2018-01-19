const ADD = 'ADD_SECTION'
const REMOVE = 'REMOVE_SECTION'
const ACTIVATE = 'ACTIVATE_SECTION'
const CHANGE_LAYOUT = 'CHANGE_SECTION_LAYOUT'

const initialState = {
	elements: [{
		name: 'section', 
		weight: 1, 
		layout: 'default',
		active: false
	}],
	addedImportantElements: {},
	activeElement: {
		availableLayouts: null,
		index: null,
		layout: 'default'
	},
}
function updateObjectInArray(array, action) {
    return array.map( (item, index) => {
        if(index !== action.payload.index) {
			if (action.type === 'ACTIVATE_SECTION') {
				return {
					...item,
					active: false
				};    				
			}
            return item;
        }
        return {
			...item,
			...action.payload.data
        };    
    });
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
				addedImportantElements:  Object.assign({}, state.addedImportantElements, action.payload.addedImportantElements ),
				activeElement: {
					...state.activeElement,
					index: null
				}
			};
		}
		case ACTIVATE: {
			return {
				...state, 
				elements: updateObjectInArray(state.elements, action),
				activeElement: {
					...state.activeElement,
					layout: state.elements[action.payload.index].layout,
					index: action.payload.index,
					availableLayouts: action.payload.availableLayouts
				}
			};
		}
		case CHANGE_LAYOUT: {
			console.log(state.elements[action.payload.index])
			return {
				...state,
				elements: updateObjectInArray(state.elements, action),
				activeElement: {
					...state.activeElement,
					layout: action.payload.data.layout
				}
			}
			// return {
			// 	...state,
			// 	elements: [{
			// 		...state.elements,
			// 		[action.payload.index] : {
			// 			...state.elements[action.payload.index],
			// 			layout: action.payload.layout
			// 		}
			// 	}]
			// };
		}
		default: {
			return state;
		}
		
	}
}