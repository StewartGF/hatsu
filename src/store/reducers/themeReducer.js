import storage from "local-storage-fallback";

const initialState = {
  isDarkMode: storage.getItem("isDarkMode")
    ? JSON.parse(storage.getItem("isDarkMode"))
    : false,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      state.isDarkMode = !state.isDarkMode;
      storage.setItem("isDarkMode", state.isDarkMode);
      return state;
    default:
      return state;
  }
};
export default themeReducer;
