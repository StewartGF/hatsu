const initialState = {
  apis: [],
  loading: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_API":
      state.apis.push(action.payload);
      return state;
    case "ADD_API_ERROR":
      console.log("ADD_API_ERROR", action.payload);
      return state;
    case "SET_API_DATA":
      console.log("data", action.payload);
      state.apis = action.payload;
      console.log("newState", state);
      return state;
    case "LOADING":
      state.loading = !state.loading;
      return state;
    default:
      return state;
  }
};

export default apiReducer;
