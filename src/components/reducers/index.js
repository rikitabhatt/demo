import { combineReducers } from "redux";
import loginpopupReducre  from "./loginpopup";
import headercounters  from "./headercounters";
const allReducers = combineReducers({
     loginPopup: loginpopupReducre,
     headerCounters: headercounters,
});
export default allReducers;