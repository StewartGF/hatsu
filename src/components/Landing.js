import React, { useEffect } from "react";
import Pick from "../../src/assets/images/pick_an_api.svg"; // relative path to image
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Landing() {
  const dispatch = useDispatch();
  const firstLanding = useSelector(
    (state) => state.themeReducer.isFirstLanding
  );
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  useEffect(() => {
    console.log(firstLanding);
    if (!firstLanding) return;

    toast("👋🏻 Bienvenido !", {
      className: `font-black border-2 ${
        isDarkMode ? "border-pink-dark text-2xl" : "border-red-500"
      }`,
      position: "top-left",
      autoClose: 5500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    dispatch({ type: "TOGGLE_FIRST_LANDING" });
  }, [isDarkMode, firstLanding, dispatch]);
  return (
    <div className="container mx-auto text-center relative  h-full align-middle px-8 pb-8 pt-2">
      <div className="grid gap-4 pt-8 lg:pt-16 h-full grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 font-bold tracking-tight">
        <div class="image-div relative w-full">
          <div className="absolute">
            <img
              loading="lazy"
              class="w-full z-20 text-left"
              src={Pick}
              alt="pick an api"
            />
          </div>
          <div className="z-0  w-full">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFD6E8"
                d="M29.4,-42.6C38.2,-40.1,45.4,-32.1,55.4,-21.9C65.4,-11.6,78.3,0.7,78.7,12.7C79.1,24.7,67.2,36.3,54.7,43.4C42.3,50.5,29.4,53.3,17.5,54.3C5.6,55.4,-5.1,54.8,-17.6,54C-30.1,53.1,-44.3,51.9,-48.3,43.8C-52.3,35.7,-46,20.7,-50,6C-54.1,-8.8,-68.4,-23.3,-68.5,-34.6C-68.5,-45.8,-54.1,-53.9,-40.3,-54C-26.5,-54.2,-13.3,-46.5,-1.5,-44.2C10.3,-42,20.7,-45.1,29.4,-42.6Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
        </div>
        <div class="self-center  h-auto text-div w-full text-center lg:text-left px-12 lg:px-8">
          <span
            class={`block text-4xl font-bold tracking-tight ${
              isDarkMode ? " text-pink-hover" : ""
            }`}
          >
            PÚBLICAS. CON O SIN TOKEN.
          </span>
          <span
            class={`tracking-tighter ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Te ofrecemos una gran variedad de APIs públicas, para que puedas
            escoger la que más se acomode a tí y a tus gustos. Con o sin token,
            con una gran variedad de categorías y escalas.
          </span>
          <span
            class={`inline-block mt-8 tracking-tighter ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Te entregamos un montón de opciones, amplía tu abanico de
            conocimientos y demuestra que puedes manejar la información que se
            te presente y en el formato que se te presente.
          </span>
          <span
            class={`block tracking-tighter ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mt-4`}
          >
            Inténtalo !
          </span>
          <button
            class={`mt-12 text-white  rounded px-8 md:px-12 p-4 duration-700 font-black  ${
              isDarkMode ? "bg-pink-dark" : "bg-red-500"
            }  tracking-tight`}
          >
            Démosle
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
