import { createActions } from "reduxsauce";
const { Types, Creators } = createActions({
	setSideBarStatusOpen: ["isSideBarOpen"],
	setSideBarStatusClose: ["isSideBarOpen"],
});

export const ConfTypes = Types;
export default Creators;