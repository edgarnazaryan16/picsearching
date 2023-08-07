import { combineReducers } from "redux";
import { picturesReducer } from "./reducer/reducer";

const allReducers = combineReducers({
    pictures: picturesReducer,
})
export default allReducers;