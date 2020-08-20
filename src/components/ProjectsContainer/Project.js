import React from "react";
import { useSelector } from "react-redux";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Project = (props) => {
  const { data } = props;
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  return (
    <div className="relative">
      <a href={data.repositoryURL} target="_blank" rel="noopener noreferrer">
        <BsBoxArrowUpRight size={20} className="absolute top-0 right-0 m-3" />
      </a>

      <div
        className={`  flex flex-wrap  ${
          isDarkMode ? "bg-dark-100 " : " border-opacity-25 border-gray"
        } shadow-xl rounded p-2`}
      >
        <div
          id="image"
          className="p-2 md:p-4 w-full lg:w-2/6 rounded shadow-sm "
        >
          <div
            className={`border-b-4 ${
              isDarkMode ? "border-pink-dark" : "border-red-500"
            }  p-2`}
          >
            <img
              src={data.imageURL}
              alt=""
              className="h-40 md:h-48 w-full  rounded"
            />
          </div>
        </div>
        <div id="textblock" className="w-full p-2 lg:w-4/6">
          <h1 className="w-full pt-2  md:pt-4 font-black flex justify-start text-md lg:text-lg">
            {data.name}
          </h1>
          <div
            id="description"
            className="pt-0 md:pt-4 flex flex-wrap text-left"
          >
            <span className="w-full text-xs md:text-md">
              {data.description}
            </span>
            <div className="w-1/2 ">
              <p
                className={`${
                  isDarkMode
                    ? "text-pink-dark tracking-widest"
                    : "text-red-500 tracking-widest"
                } font-black mt-4`}
              >
                Tecnologías
              </p>
              {data.technologies.map((technology) => {
                return (
                  <span
                    key={technology}
                    className={
                      isDarkMode
                        ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                        : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                    }
                  >
                    {technology}
                  </span>
                );
              })}
            </div>
            <div className="w-1/2 ">
              <div className="w-full flex justify-start  ">
                <span
                  className={`${
                    isDarkMode
                      ? "text-pink-dark tracking-widest"
                      : "text-red-500 tracking-widest"
                  } font-black mt-4`}
                >
                  Api Utilizada:
                </span>
              </div>
              <div className="w-full flex justify-start  ">
                <span
                  className={
                    isDarkMode
                      ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                      : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                  }
                >
                  {data.usedAPI}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
