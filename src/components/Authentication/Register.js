import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../configs/fbConfig";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
//CUSTOM HOOKS
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

const Register = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const userData = useSelector((state) => state.authReducer.user);
  const [data, setData] = useState({
    name: "",
  });
  const [nameInput, setNameInput] = useFocus();
  const validateSubmit = (e) => {
    e.preventDefault();
    if (data.name === "") {
      setNameInput();
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
  const handleSubmit = () => {
    const user = auth.currentUser;
    if (user) {
      user
        .updateProfile({
          displayName: data.name,
        })
        .then(function () {
          // Update successful.
          toast("Nombre actualizado👌", {
            className: `font-black border-2 ${
              isDarkMode ? "border-pink-dark text-2xl" : "border-red-500"
            }`,
            position: "bottom-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
          });

          dispatch({ type: "SET_USER", payload: user });
          setData({ name: "" });
        })
        .catch(function (error) {
          // An error happened.
          toast.error("😱 Hubo un probema", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };
  return (
    <>
      {userData ? (
        <div className="pb-2">
          <div className="container mx-auto text-center relative align-middle pt-2">
            <div id="title" className="text-3xl">
              <p>
                <span role="img" aria-label="img">
                  📜
                </span>
                Actualiza tu perfil
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
                htmlFor="name"
              >
                Ingresa tu primer nombre
              </label>
            </div>
            <div className="md:w-full">
              <input
                className={
                  isDarkMode
                    ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                    : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                }
                name="name"
                type="text"
                ref={nameInput}
                value={data.name}
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
              Actualizar
            </button>
          </div>
        </div>
      ) : (
        <Redirect
          to={{
            pathname: "/",
          }}
        />
      )}
    </>
  );
};

export default Register;
