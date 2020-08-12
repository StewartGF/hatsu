import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  let [isOpen, setIsOpen] = useState(false);
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
          <Link onClick={() => setIsOpen(!isOpen)} to="/">
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
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden  w-full flex-grow md:flex md:items-center md:w-auto">
            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="text-sm md:flex-grow">
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  Inicio
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/api"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  APIs Públicas
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/projects"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  Proyectos
                </Link>
                <Link
                  onClick={() => setIsOpen(!isOpen)}
                  to="/add-api"
                  className="block mt-4 md:inline-block md:mt-0 hover:text-gray-500 font-black mr-4"
                >
                  Agregar API
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
