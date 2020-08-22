import storage from "local-storage-fallback";

const initialState = {
  user: storage.getItem("user") ? JSON.parse(storage.getItem("user")) : false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      storage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: { ...state.user, ...action.payload } };
    // state.user = action.payload;
    // console.log("new state", state.user);
    case "LOGOUT":
      return { ...state, user: false };
    default:
      return state;
  }
};
export default authReducer;
