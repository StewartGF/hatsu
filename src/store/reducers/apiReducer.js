const initialState = {
  apis: [],
  last: null,
  loading: false,
  count: 0,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_API_ERROR":
      console.log("ADD_API_ERROR", action.payload);
      return state;
    case "SET_API_DATA":
      state.apis = action.payload;
      return state;
    case "SET_API_COUNT":
      state.count = action.payload;
      return state;
    case "SET_LAST_DOCUMENT":
      state.last = action.payload;
      return state;
    case "UPDATE_COUNT_BY_ONE":
      state.count = state.count + 1;
      return state;
    case "LOADING":
      state.loading = !state.loading;
      return state;
    default:
      return state;
  }
};

export default apiReducer;
