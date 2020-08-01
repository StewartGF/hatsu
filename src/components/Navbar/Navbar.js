import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6 shadow-md">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link to="/">
            <span className="font-semibold text-xl tracking-wide font-black text-black  pl-2 pr-4 border-r-2 border-red-500">
              🩸 Hatsu
            </span>
          </Link>
        </div>
        <div className="block md:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-red-400 hover:text-gray-500 hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-none h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {isOpen ? (
          <div className="block w-full flex-grow md:flex md:items-center md:w-auto">
            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="text-sm md:flex-grow">
                <Link
                  to="/"
                  className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 font-medium mr-4"
                >
                  Inicio
                </Link>
                <Link
                  to="/api"
                  className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 font-medium mr-4"
                >
                  APIs Públicas
                </Link>
                <Link
                  to="/projects"
                  className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 font-medium mr-4"
                >
                  Proyectos
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden  w-full flex-grow md:flex md:items-center md:w-auto">
            <div className="w-full block flex-grow md:flex md:items-center md:w-auto">
              <div className="text-sm md:flex-grow">
                <Link
                  to="/"
                  className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 font-medium mr-4"
                >
                  Inicio
                </Link>
                <Link
                  to="/api"
                  className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 font-medium mr-4"
                >
                  APIs Públicas
                </Link>
                <Link
                  to="/projects"
                  className="block mt-4 md:inline-block md:mt-0 text-black hover:text-gray-500 font-medium mr-4"
                >
                  Proyectos
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
