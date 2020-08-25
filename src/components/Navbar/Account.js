import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../../configs/fbConfig";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsPersonFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const Account = () => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const user = useSelector((state) => state.authReducer.user);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="relative inline-block focus:outline-none">
      <button
        onClick={user ? handleOpen : null}
        className="bg-transparent focus:outline-none font-black hover:text-gray-500"
      >
        {user ? (
          <>
            {user.displayName ? `${user.displayName}` : "Cuenta"}
            <IoIosArrowDown className="ml-4 inline-block" />
          </>
        ) : (
          <Link
            to="/login"
            className="font-black block order-last mt-4 md:inline-block md:mt-0 hover:text-gray-500  mr-4"
          >
            <BsPersonFill className="inline-block mr-2 hover:text-white" />
            Iniciar sesión
          </Link>
        )}
      </button>
      {open && (
        <button
          onClick={(e) => setOpen(false)}
          tabIndex="-1"
          className="fixed inset-0 h-full w-full focus:outline-none z-30"
        ></button>
      )}
      {open && (
        <div className="absolute w-56 mt-2 right-0 z-50 bg-white rounded-lg py-2 shadow-xl">
          {user && (
            <>
              <Link
                to="/register"
                className="block text-black px-4 py-2 hover:bg-dark-100 hover:text-white w-full"
                onClick={handleOpen}
              >
                <BsPersonFill className="inline-block mr-2 hover:text-white" />
                Actualiza tus datos
              </Link>
              <button
                className="block text-black px-4 text-left py-2 hover:bg-dark-100 hover:text-white w-full"
                onClick={handleLogout}
              >
                <FiLogOut className="inline-block mr-2" />
                Salir
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Account;
