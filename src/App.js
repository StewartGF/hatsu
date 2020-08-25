import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ApiContainer from "./components/ApisContainer/ApiContainer";
import AddApi from "./components/ApisContainer/AddApi";
import Landing from "./components/Landing";
import ProjectContainer from "./components/ProjectsContainer/ProjectContainer";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AddProject from "./components/ProjectsContainer/AddProject";
import Login from "./components/Authentication/Login";
import Authvalidation from "./components/Authentication/Authvalidation";
import Register from "./components/Authentication/Register";

function App() {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);

  if (isDarkMode) {
    document.body.classList.remove("bg-white");
    document.body.classList.add("bg-dark-200");
    document.body.classList.add("text-white");
  } else {
    document.body.classList.remove("bg-dark-200");
    document.body.classList.remove("text-white");
    document.body.classList.add("bg-white");
  }
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Landing />
        </Route>
        <Route path="/api">
          <Navbar />
          <ApiContainer />
        </Route>
        <Route path="/projects">
          <Navbar />
          <ProjectContainer />
        </Route>
        <Route path="/add-api">
          <Navbar />
          <AddApi />
        </Route>
        <Route path="/add-project">
          <Navbar />
          <AddProject />
        </Route>
        <Route path="/login">
          <Navbar />
          <Login />
        </Route>
        <Route path="/register">
          <Navbar />
          <Register />
        </Route>
        <Route path="/auth-validation">
          <Authvalidation />
        </Route>
      </Switch>
    </>
  );
}

export default App;
