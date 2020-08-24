import React, { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import ApiContainer from "./components/ApisContainer/ApiContainer";
import AddApi from "./components/ApisContainer/AddApi";
import Landing from "./components/Landing";
import ProjectContainer from "./components/ProjectsContainer/ProjectContainer";
import { Switch, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AddProject from "./components/ProjectsContainer/AddProject";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import { auth } from "../src/configs/fbConfig";
import { useState } from "react";

function App() {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const [finishingProcess, setFinishingProcess] = useState(false);
  useEffect(() => {
    //LOGIN USEFFECT
    // Confirm the link is a sign-in with email link.
    if (!user) {
      try {
        if (auth.isSignInWithEmailLink(window.location.href)) {
          // Additional state parameters can also be passed via URL.
          // This can be used to continue the user's intended action before triggering
          // the sign-in operation.
          // Get the email if available. This should be available if the user completes
          // the flow on the same device where they started it.
          var email = window.localStorage.getItem("emailForSignIn");
          if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            console.log("no esta logeado");
          }
          // The client SDK will parse the code from the link for you.
          async function Logged() {
            try {
              const result = await auth.signInWithEmailLink(
                email,
                window.location.href
              );
              dispatch({ type: "SET_USER", payload: result.user });
              // Clear email from storage.
              window.localStorage.removeItem("emailForSignIn");
              setFinishingProcess(true);
              // You can access the new user via result.user
              // Additional user info profile not available via:
              // result.additionalUserInfo.profile == null
              // You can check if the user is new or existing:
              // result.additionalUserInfo.isNewUser
            } catch (error) {
              console.error(error);
            }
          }
          Logged();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setFinishingProcess(true);
    }
  });
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
      {finishingProcess && (
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
              <ProjectContainer />
            </Route>
            <Route path="/add-api">
              <AddApi />
            </Route>
            <Route path="/add-project">
              <AddProject />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
}

export default App;
