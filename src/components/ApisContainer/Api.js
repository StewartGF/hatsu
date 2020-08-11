import React from "react";
import { useSelector } from "react-redux";

const Apis = (props) => {
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const { data } = props;
  return (
    <>
      <div
        className={
          isDarkMode
            ? "w-full h-full border shadow-xl rounded p-4 group bg-dark-100 text-white border-black "
            : "w-full h-full border shadow-xl rounded p-4 group"
        }
      >
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <div id="top-container" className="text-xl flex align-center">
            <div id="imageContainer" className="w-1/5 flex mx-auto">
              <img
                className="w-12  h-12 rounded-full mx-auto object-contain duration-500 transform scale-100  md:group-hover:scale-115  xl:group-hover:scale-130"
                loading="lazy"
                src={data.imageUrl}
                alt="logo"
              />
            </div>
            <div
              id="nameContainer"
              className="w-4/5 flex items-center font-black tracking-tighter justify-start"
            >
              {data.name}
            </div>
          </div>
          <div id="bottom-container" className="  mt-4">
            <p className="px-2">{data.description}</p>
            <div className="px-2 py-4">
              {data.tags &&
                data.tags.map((tag) => {
                  return (
                    <span
                      className={
                        isDarkMode
                          ? "bg-dark-200 text-white inline-block  border-pink-dark rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold   border-2 "
                          : "inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm border-red-500 font-semibold text-gray-700  border-2 "
                      }
                      key={tag}
                    >
                      #{tag}
                    </span>
                  );
                })}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Apis;
