const initialState = {
  projects: [],
  count: 0,
  loading: false,
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      state.projects = action.payload;
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

export default projectReducer;
