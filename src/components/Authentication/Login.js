import React, { useState, useRef, useEffect } from "react";
import { auth } from "../../configs/fbConfig";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loading";
import { analytics } from "../../configs/fbConfig";

//CUSTOM HOOKS
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

const Login = () => {
  const [loading, setLoading] = useState(false);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const [data, setData] = useState({
    email: "",
  });
  const [emailInput, setEmailInput] = useFocus();
  useEffect(() => {
    analytics().logEvent("login_page_view", { landing_at: Date.now() });
  });
  const validateSubmit = (e) => {
    e.preventDefault();
    if (data.email === "") {
      setEmailInput();
      dropAnAlert();
      return;
    }

    handleSubmit();
  };
  const dropAnAlert = () => {
    toast.error("😱 Por favor, llena todos los campos", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const handleDataChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);

      await auth.sendSignInLinkToEmail(data.email, actionCodeSettings);
      window.localStorage.setItem("emailForSignIn", data.email);
      setData({
        email: "",
      });
      toast("🧙🏻‍♂️ Listo !, te enviaremos un email", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    } catch (error) {
      toast.error("🧙🏻‍♂️ Ups ! hubo un problema, intenta nuevamente", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
    }
  };
  var actionCodeSettings = {
    // url: "http://hatsu-dev.netlify.com/auth-validation",
    url: "http://localhost:3000/auth-validation", //DEV
    // This must be true.
    handleCodeInApp: true,
  };
  return (
    <div className="pb-2">
      <div className="container mx-auto text-center relative align-middle pt-2">
        <div id="title" className="text-3xl">
          <p>
            <span role="img" aria-label="img">
              📜
            </span>
            Login
          </p>
        </div>
      </div>
      <div className="container w-3/4 lg:w-2/5 mx-auto mt-6  md:items-center mb-2">
        <div className="md:w-full flex items-start">
          <label
            className={
              isDarkMode
                ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            }
            htmlFor="email"
          >
            Correo electrónico
          </label>
        </div>
        <div className="md:w-full">
          <input
            className={
              isDarkMode
                ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
            }
            name="email"
            type="text"
            ref={emailInput}
            value={data.email}
            onChange={handleDataChange}
          />
        </div>
      </div>
      <div className="container w-full mx-auto mt-12 flex justify-center flex-wrap md:items-center mb-6">
        <button
          onClick={validateSubmit}
          className={
            isDarkMode
              ? "flex-shrink-0  font-black bg-pink-dark hover:bg-pink-hover border-pink-dark hover:border-pink-hover  focus:outline-none text-sm border-4 text-white py-1 px-6 md:px-8 rounded"
              : "flex-shrink-0  font-black bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700  focus:outline-none text-sm border-4 text-white py-1 px-6 md:px-8 rounded"
          }
        >
          Ingresar
        </button>
      </div>
      {loading ? <Loading /> : ""}
    </div>
  );
};

export default Login;
