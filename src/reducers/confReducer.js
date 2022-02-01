import { ConfTypes } from "../actions/Conf"

const initialState = {
	isSideBarOpen: false,
}
const confReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case ConfTypes.SET_SIDE_BAR_STATUS_OPEN:
			return Object.assign({}, prevState, { isSideBarOpen: true, error: "" });
		case ConfTypes.SET_SIDE_BAR_STATUS_CLOSE:
			return Object.assign({}, prevState, { isSideBarOpen: false }, { ...action.user });
		default:
			return prevState;
	}
}

export default confReducer