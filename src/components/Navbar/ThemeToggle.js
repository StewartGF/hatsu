import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ThemeToggle = () => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch({ type: "TOGGLE_THEME" });
    const btnSwitch = document.querySelector("#switch");
    btnSwitch.classList.toggle("active");
  };
  return (
    <div className="focus:outline-none">
      <div className="toggle-wrapper" onClick={handleToggle}>
        <button
          className={`switch focus:outline-none ${isDarkMode ? "active" : ""}`}
          id="switch"
        >
          <span className="span-toggle focus:outline-none">
            <i className="fas fa-sun focus:outline-none"></i>
          </span>
          <span className="span-toggle focus:outline-none">
            <i className="fas fa-moon focus:outline-none"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
