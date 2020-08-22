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

function App() {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
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
          auth
            .signInWithEmailLink(email, window.location.href)
            .then(function (result) {
              // Clear email from storage.
              window.localStorage.removeItem("emailForSignIn");
              console.log(result.user);
              dispatch({ type: "SET_USER", payload: result.user });
              // You can access the new user via result.user
              // Additional user info profile not available via:
              // result.additionalUserInfo.profile == null
              // You can check if the user is new or existing:
              // result.additionalUserInfo.isNewUser
            })
            .catch(function (error) {
              // Some error occurred, you can inspect the code: error.code
              // Common errors could be invalid email and invalid or expired OTPs.
            });
        }
      } catch (error) {
        console.log(error);
      }
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
  );
}

export default App;
