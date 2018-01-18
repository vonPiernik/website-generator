export default function addSection(el = 'section') {
	const payload = {
		element: {
			name: el,
			weight: 1,
			layout: 'default'
		},
		addedImportantElements: {}
	}
	switch(el){
		case 'footer': payload.element.weight = 2; payload.addedImportantElements.footer = true; break;
		case 'navbar': payload.element.weight = 0; payload.addedImportantElements.navbar = true; break;
		default: break;
	}
	return {
		type: "ADD_SECTION",
		payload: payload,
	}
}

export function removeSection(index, el = 'section') {
	const payload = {
		element: {
			index: index,
		},
		addedImportantElements: {}
	}
	switch(el){
		case 'footer': payload.addedImportantElements.footer = false; break;
		case 'navbar': payload.addedImportantElements.navbar = false; break;
		default: break;
	}
	return {
		type: "REMOVE_SECTION",
		payload: payload,
	}
}

export function activateSection(index){
	return {
		type: "ACTIVATE_SECTION",
		payload: index,
	}
}

export function changeSectionLayout(layout = 'default', index){
	const payload = {
		index: index,
		layout: layout
	}
	return {
		type: "CHANGE_SECTION_LAYOUT",
		payload: payload,
	}
}
