const initialState = {
  apis: [],
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
      state.apis = action.payload;
      return state;
    default:
      return state;
  }
};

export default apiReducer;
