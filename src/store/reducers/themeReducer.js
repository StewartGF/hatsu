import storage from "local-storage-fallback";

const initialState = {
  isDarkMode: storage.getItem("isDarkMode")
    ? JSON.parse(storage.getItem("isDarkMode"))
    : false,
  isFirstLanding: true,
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      state.isDarkMode = !state.isDarkMode;
      storage.setItem("isDarkMode", state.isDarkMode);
      return state;
    case "TOGGLE_FIRST_LANDING":
      state.isFirstLanding = !state.isFirstLanding;
      return state;
    default:
      return state;
  }
};
export default themeReducer;
