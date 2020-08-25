import React, { useState, useEffect } from "react";
import Loading from "../Loading";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../configs/fbConfig";
import { Redirect } from "react-router-dom";
const Authvalidation = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
  const [finishingProcess, setFinishingProcess] = useState(false);
  useEffect(() => {
    try {
      if (auth.isSignInWithEmailLink(window.location.href)) {
        var email = window.localStorage.getItem("emailForSignIn");
        if (!email) {
          setFinishingProcess(true);
        }
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
            console.log("seteo nombre y cuenta");
          } catch (error) {
            setFinishingProcess(true);
            console.error(error);
          }
        }
        Logged();
      } else {
        console.log("no viene desde un link de gmail");
        setFinishingProcess(true);
      }
    } catch (error) {
      console.log("no hay email en la storage");
      setFinishingProcess(true);
    }
  }, [setFinishingProcess, dispatch, user]);
  return <>{finishingProcess ? <Redirect to="/" /> : <Loading />}</>;
};

export default Authvalidation;
