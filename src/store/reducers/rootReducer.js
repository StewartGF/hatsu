import apiReducer from "./apiReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import themeReducer from "./themeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  apiReducer,
  projectReducer,
  authReducer,
  themeReducer,
});

export default rootReducer;
