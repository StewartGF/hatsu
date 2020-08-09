import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ApiContainer from "./components/ApisContainer/ApiContainer";
import AddApi from "./components/ApisContainer/AddApi";
import Landing from "./components/Landing";
import Projects from "./components/ProjectsContainer/Projects";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Global, css } from "@emotion/core";

function App() {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  // console.log(isDarkMode);
  // if (isDarkMode) {
  //   document.body.classList.remove("bg-white");
  //   document.body.classList.add("bg-dark-200");
  //   document.body.classList.add("text-white");
  // } else {
  //   document.body.classList.remove("bg-dark-200");
  //   document.body.classList.remove("text-white");
  //   document.body.classList.add("bg-white");
  // }
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: ${isDarkMode ? "#120D1F" : "white"};
            color: ${isDarkMode ? "white" : "black"};
          }
        `}
      />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/api">
          <ApiContainer />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/add-api">
          <AddApi />
        </Route>
      </Switch>
    </>
  );
}

export default App;
