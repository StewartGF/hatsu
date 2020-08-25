import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { auth } from "../../configs/fbConfig";
import { useDispatch } from "react-redux";
import Account from "./Account";
import { BsPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  let [isOpen, setIsOpen] = useState(false);
  const [hasName, setHasName] = useState(false);
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    if (user) {
      if (user.displayName !== null) {
        setHasName(true);
      }
    } else {
      setHasName(false);
    }
  }, [user, hasName, user.displayName]);
  const handleLogout = () => {
    auth
      .signOut()
      .then(function () {
        // Sign-out successful.
        toast("Adiós 👌 !", {
          className: `font-black border-2 ${
            isDarkMode ? "border-pink-dark text-2xl" : "border-red-500"
          }`,
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        window.localStorage.removeItem("user");
        dispatch({ type: "LOGOUT" });
      })
      .catch(function (error) {
        toast("Oops intentalo nuevamente", {
          className: `font-black border-2 ${
            isDarkMode ? "border-pink-dark text-2xl" : "border-red-500"
          }`,
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      });
  };
  return (
    <div className=" ">
      <nav
        className={
          isDarkMode
            ? "flex items-center justify-between flex-wrap bg-dark-200 p-4 shadow-md text-white"
            : "flex items-center justify-between flex-wrap p-4 shadow-md bg-white text-black"
        }
      >
        <div className="flex items-center flex-shrink-0 mr-6 ">
          <Link to="/">
            <span
              className={
                isDarkMode
                  ? "text-xl tracking-wide font-black  pl-2 pr-4 border-r-2 border-white"
                  : "text-xl tracking-wide font-black  pl-2 pr-4 border-r-2 border-red-500"
              }
            >
              <span role="img" aria-label="emoji">
                🎴 Hatsū
              </span>
            </span>
          </Link>
        </div>
        <div className="order-none flex  md:order-last ">
          <ThemeToggle />
          <div className="block md:hidden ml-4 xl:ml-0">
            <button
              className={`flex items-center px-3 py-2 border rounded focus:outline-none ${
                isDarkMode ? "border-white" : "border-red-400"
              } hover:text-gray-500 hover:border-white`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className={
                  isDarkMode
                    ? "fill-current text-white h-3 w-3 "
                    : "fill-current text-black h-3 w-3"
                }
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen ? (
          <div className="block w-full flex-grow md:flex md:items-center md:w-auto">
            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="text-sm md:flex-grow">
                {user && (
                  <span
                    className={`md:hidden block mt-6 ${
                      isDarkMode ? "text-pink-dark" : "text-red-500"
                    } font-black`}
                  >
                    Bienvenido {user.displayName}
                  </span>
                )}
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/"
                  className="font-black block mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                >
                  Inicio
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/api"
                  className="font-black block mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                >
                  APIs Públicas
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/projects"
                  className="font-black block mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                >
                  Proyectos
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/add-api"
                  className="font-black block mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                >
                  Agregar API
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/add-project"
                  className="font-black block mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                >
                  Agregar Proyectos
                </Link>
                {user && (
                  <>
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      to="/register"
                      className="font-black block order-last mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                    >
                      <BsPersonFill className="inline-block mr-2 hover:text-white" />
                      Actualiza tus datos
                    </Link>
                  </>
                )}

                {user ? (
                  <>
                    <button
                      onClick={handleLogout}
                      className="font-black block order-last mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                    >
                      <FiLogOut className="inline-block mr-2" />
                      Salir
                    </button>
                  </>
                ) : (
                  <>
                    {user ? (
                      <>
                        {user.displayName ? `${user.displayName}` : "Cuenta"}
                        <IoIosArrowDown className="ml-4 inline-block" />
                      </>
                    ) : (
                      <Link
                        to="/login"
                        onClick={() => setIsOpen(!isOpen)}
                        className="font-black block order-last mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                      >
                        <BsPersonFill className="inline-block mr-2 hover:text-white" />
                        Iniciar sesión
                      </Link>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden  w-full flex-grow md:flex md:items-center md:w-auto">
            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="text-sm md:flex-grow">
                <Link
                  to="/"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  Inicio
                </Link>
                <Link
                  to="/api"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  APIs Públicas
                </Link>
                <Link
                  to="/projects"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  Proyectos
                </Link>
                <Link
                  to="/add-api"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  Agregar API
                </Link>
                <Link
                  to="/add-project"
                  className="font-black block mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
                >
                  Agregar Proyectos
                </Link>
                <Account />
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
