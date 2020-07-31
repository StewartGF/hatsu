import React from "react";
import Navbar from "./components/Navbar";
import Apis from "./components/Apis";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/apis">
          <Apis />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
