import apiReducer from "./apiReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  apiReducer,
  projectReducer,
  authReducer,
});

export default rootReducer;
