import apiReducer from "./apiReducer";
import projectReducer from "./projectReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  apiReducer,
  projectReducer,
  authReducer,
  firestoreReducer, // contiene toda la informacion de la db
});

export default rootReducer;
