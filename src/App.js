import React from "react";
import Navbar from "./components/Navbar/Navbar";
import ApiContainer from "./components/ApisContainer/ApiContainer";
import Landing from "./components/Landing";
import Projects from "./components/ProjectsContainer/Projects";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
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
      </Switch>
    </>
  );
}

export default App;
