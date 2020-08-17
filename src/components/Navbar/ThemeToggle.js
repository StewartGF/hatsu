import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaSun, FaMoon } from "react-icons/fa";

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
            <FaSun size={22} className="m-auto h-full" />
          </span>
          <span className="span-toggle focus:outline-none">
            <FaMoon size={22} className="m-auto h-full" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
