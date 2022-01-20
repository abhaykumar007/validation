import { combineReducers } from "redux";
import reducerFun from "./addReducer";

const allReducers = combineReducers({ reducerFun });

export default allReducers;
