const initialState = {
  apis: [],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_API":
      state.apis.push(action.payload);
      console.log("se agrego la api", action.payload);
      console.log("nuevo state", state);
      return state;
    case "ADD_API_ERROR":
      console.log("ADD_API_ERROR", action.payload);
      return state;
    case "SET_API_DATA":
      state.apis = action.payload;
      console.log("se setea la data");
      return state;
    default:
      return state;
  }
};

export default apiReducer;
