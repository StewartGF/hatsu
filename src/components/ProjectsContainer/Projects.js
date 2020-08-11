import React from "react";
import SS from "../../assets/Screenshot_1.png";
import { useSelector } from "react-redux";

function Projects() {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="container mx-auto text-center">
      <div className="text-4xl py-6">
        <span role="img" aria-label="emoji">
          👨🏻‍💻
        </span>
        Proyectos
      </div>
      <div className="grid gap-4 grid-cols-1">
        {arr.map((x, index) => {
          return (
            <div
              id="project"
              className={` ${x % 2 === 0 ? "ml-12" : ""} flex flex-wrap  ${
                isDarkMode
                  ? "bg-dark-100 "
                  : "border border-opacity-25 border-gray"
              } shadow-xl rounded `}
            >
              <div id="image" className="p-4 w-2/6 rounded shadow-sm ">
                <div
                  className={`border-b-4 ${
                    isDarkMode ? "border-pink-dark" : "border-red-500"
                  }  p-2`}
                >
                  <img src={SS} alt="" className="h-48 w-full  rounded" />
                </div>
              </div>
              <div id="textblock" className="w-4/6">
                <h1 className="w-full pt-4 font-black flex justify-start text-lg">
                  <span role="img" aria-label="emoji">
                    🎴
                  </span>
                  Hatsū
                </h1>
                <div id="description" className="pt-4 flex text-left">
                  <span>
                    Listado de APIs públicas, además, te da la posibilidad de
                    obtener alguna de manera random para poder comenzar tu
                    próximo proyecto{" "}
                    <span role="img" aria-label="emoji">
                      😋
                    </span>
                  </span>
                  <div className="w-full">
                    <p className="">Technologies</p>
                    <span
                      className={
                        isDarkMode
                          ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                          : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                      }
                    >
                      React
                    </span>
                    <span
                      className={
                        isDarkMode
                          ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                          : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                      }
                    >
                      Firebase
                    </span>
                    <span
                      className={
                        isDarkMode
                          ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                          : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                      }
                    >
                      Tailwind
                    </span>
                    <span
                      className={
                        isDarkMode
                          ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                          : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                      }
                    >
                      Redux
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
