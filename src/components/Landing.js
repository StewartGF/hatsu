import React, { useEffect } from "react";
import Pick from "../../src/assets/images/pick_an_api.svg"; // relative path to image
import Share from "../../src/assets/images/share_project.svg"; // relative path to image
import Improve from "../../src/assets/images/improve_portfolio.svg"; // relative path to image
import PickDark from "../../src/assets/images/pick_an_api_dark.svg"; // relative path to image
import ShareDark from "../../src/assets/images/share_project_dark.svg"; // relative path to image
import ImproveDark from "../../src/assets/images/improve_portfolio_dark.svg"; // relative path to image
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { BsChevronDoubleDown } from "react-icons/bs";
import { analytics } from "../configs/fbConfig";

function Landing() {
  const dispatch = useDispatch();
  const firstLanding = useSelector(
    (state) => state.themeReducer.isFirstLanding
  );
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const user = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    analytics().setCurrentScreen(window.location.pathname); // sets `screen_name` parameter
    analytics().logEvent("screen_view"); // log event with `screen_name` parameter attached
    analytics().logEvent("landing_page_view", { landing_at: Date.now() });
  });
  useEffect(() => {
    if (!firstLanding) return;

    toast(
      `👋🏻 Bienvenido ${
        user ? (user.displayName ? user.displayName : "") : ""
      } !`,
      {
        className: `font-black border-2 ${
          isDarkMode ? "border-pink-dark text-xl" : "border-red-500"
        }`,
        position: "top-left",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      }
    );
    dispatch({ type: "TOGGLE_FIRST_LANDING" });
  }, [isDarkMode, firstLanding, dispatch, user]);
  return (
    <>
      <div className="container mx-auto text-center relative  h-full align-middle px-8 pb-8 pt-2">
        <div className="grid gap-2 pt-4 lg:pt-12 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 font-bold tracking-tight">
          <div className="image-div relative w-full">
            <div className=" absolute">
              <img
                loading="lazy"
                className="w-full h-48 z-20 text-left lg:h-full"
                src={isDarkMode ? PickDark : Pick}
                alt="pick an api"
              />
            </div>
            <div className="z-0 h-48 w-full lg:h-full">
              <svg
                className="h-48 w-full lg:h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={`${isDarkMode ? "#EFB0E4" : "#f56565"}`}
                  d="M29.4,-42.6C38.2,-40.1,45.4,-32.1,55.4,-21.9C65.4,-11.6,78.3,0.7,78.7,12.7C79.1,24.7,67.2,36.3,54.7,43.4C42.3,50.5,29.4,53.3,17.5,54.3C5.6,55.4,-5.1,54.8,-17.6,54C-30.1,53.1,-44.3,51.9,-48.3,43.8C-52.3,35.7,-46,20.7,-50,6C-54.1,-8.8,-68.4,-23.3,-68.5,-34.6C-68.5,-45.8,-54.1,-53.9,-40.3,-54C-26.5,-54.2,-13.3,-46.5,-1.5,-44.2C10.3,-42,20.7,-45.1,29.4,-42.6Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <div className="self-center h-full my-auto mt-24 text-div w-full text-center lg:text-left px-0 lg:px-8">
            <span
              className={`block text-4xl font-bold tracking-tight ${
                isDarkMode ? " text-pink-hover" : "text-red-600"
              }`}
            >
              PÚBLICAS. CON O SIN TOKEN.
            </span>
            <span
              className={`tracking-tighter ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Te ofrecemos una gran variedad de APIs públicas, para que puedas
              escoger la que más se acomode a tí y a tus gustos. Con o sin
              token, con una gran variedad de categorías y escalas.
            </span>
            <span
              className={`inline-block tracking-tighter ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Te entregamos un montón de opciones, amplía tu abanico de
              conocimientos y demuestra que puedes manejar la información que se
              te presente y en el formato que se te presente.
            </span>
            <div className="w-full mx-auto flex mt-6 justify-center">
              <BsChevronDoubleDown
                size={50}
                className={` ${
                  isDarkMode ? "text-pink-dark" : "text-red-500"
                } fa-3x md:fa-2x mt-2  vert-move`}
              ></BsChevronDoubleDown>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center relative  h-full align-middle px-8 pb-8 pt-2">
        <div className="grid gap-2 pt-4 lg:pt-12 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 font-bold tracking-tight">
          <div className="image-div relative w-full order-none md:order-last">
            <div className=" absolute">
              <img
                loading="lazy"
                className="w-full h-48 z-20 text-left lg:h-full"
                src={isDarkMode ? ShareDark : Share}
                alt="Share your project"
              />
            </div>
            <div className="z-0 h-48 ml-4 w-full lg:h-full">
              <svg
                className="h-64 w-full lg:h-full "
                viewBox="0 0 200 200 "
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={`${isDarkMode ? "#EFB0E4" : "#f56565"}`}
                  d="M42.2,-64C55.4,-65.5,67.3,-55.6,73.3,-43C79.4,-30.5,79.6,-15.2,70,-5.5C60.5,4.2,41.3,8.5,35.2,21C29.1,33.5,36.2,54.3,32.6,52.6C28.9,50.9,14.4,26.8,3.2,21.2C-8,15.6,-16,28.6,-27.8,34.9C-39.5,41.3,-55,41,-57,34.1C-59,27.2,-47.4,13.6,-43.9,2C-40.3,-9.5,-44.9,-19,-46.1,-31.5C-47.4,-44,-45.3,-59.5,-37.1,-60.8C-28.9,-62.2,-14.4,-49.4,0,-49.5C14.5,-49.5,29,-62.5,42.2,-64Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <div className="self-center h-auto text-div w-full text-center lg:text-left px-4 lg:px-8">
            <span
              className={`block text-4xl font-bold tracking-tight ${
                isDarkMode ? " text-pink-hover" : "text-red-600"
              }`}
            >
              COMPARTE TUS PROYECTOS.
            </span>
            <span
              className={`tracking-tighter ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              ¿ Haz usado alguna de estas APIs para desarrollar alguna
              aplicación ? Comparte tus logros, muéstrale al mundo lo que puedes
              hacer con estos servicios.
            </span>
            <span
              className={`inline-block tracking-tighter ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Regala inspiración para las personas que están interesadas en
              aumentar su abanico de repositorios.
            </span>
            <span
              className={`inline-block tracking-tighter mt-4 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Puedes hacerlo las veces que quieras. Con la cantidad de proyectos
              que quieras.
            </span>
            <Link to="/add-project">
              <button
                className={`${
                  isDarkMode ? "bg-pink-dark" : "bg-red-500"
                } text-white font-black py-4 px-6 rounded mt-12 vert-move-sides`}
              >
                COMPARTIR
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center relative  h-full align-middle px-8 pb-8 py-24 mb-0 md:mb-48">
        <div className="grid gap-2 pt-4 lg:pt-12 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 font-bold tracking-tight">
          <div className="image-div relative w-full">
            <div className=" absolute">
              <img
                loading="lazy"
                className="w-full h-48 z-20 text-left lg:h-full"
                src={isDarkMode ? ImproveDark : Improve}
                alt="Improve your portofolio"
              />
            </div>
            <div className="z-0 h-48 w-full lg:h-full">
              <svg
                className="h-64 pl-64 w-full lg:h-full"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill={`${isDarkMode ? "#EFB0E4" : "#f56565"}`}
                  d="M22.7,-37.9C33,-33.3,47.5,-34.6,56,-29.2C64.6,-23.9,67.1,-11.9,68.1,0.6C69.1,13.1,68.6,26.2,60.5,32.3C52.4,38.4,36.7,37.4,25.4,32.4C14,27.4,7,18.4,-2,21.9C-11,25.4,-22.1,41.4,-36.1,47.9C-50.1,54.4,-67,51.4,-68.5,41.9C-70,32.3,-56.1,16.1,-42.5,7.8C-29,-0.5,-15.7,-1,-12.4,-7.4C-9.2,-13.9,-15.8,-26.4,-15.4,-36.8C-15,-47.1,-7.5,-55.4,-0.7,-54.2C6.2,-53.1,12.3,-42.6,22.7,-37.9Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
          </div>
          <div className="self-center h-auto text-div w-full text-center lg:text-left px-4 lg:px-8">
            <span
              className={`block text-4xl font-bold tracking-tight ${
                isDarkMode ? " text-pink-hover" : "text-red-600"
              }`}
            >
              MEJORA TU PORTAFOLIO.
            </span>
            <span
              className={`tracking-tighter ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Apuesto que tienes hambre de mejorar. Demuestra tu constante
              crecimiento, infinito interés, ganas de aprender y usar todo lo
              que está a tu disposición. Usa alguna de los servicios que te
              entregamos, son gratis, mejorar está al alcance de tus manos.
            </span>
            <span
              className={`inline-block tracking-tighter mt-6 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Qué mejor que poder aprender y mejorar tu posibilidad de encontrar
              trabajo de manera sencilla y con la capacidad de ayudar al resto,
              nada mal ¿ no ?
            </span>
            <Link to="/api">
              <button
                className={`${
                  isDarkMode ? "bg-pink-dark" : "bg-red-500"
                } text-white font-black py-4 px-6 rounded mt-12 vert-move-sides`}
              >
                OK, DEMOSLE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
