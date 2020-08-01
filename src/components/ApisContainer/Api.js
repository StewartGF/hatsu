import React from "react";

const Apis = () => {
  return (
    <>
      <div className="w-full border shadow-lg rounded p-4 ">
        <div id="top-container" className="text-xl flex align-center">
          <div id="imageContainer" className="w-1/5 flex mx-auto">
            <img
              className="w-10  h-10 rounded-full mx-auto"
              src="images/kitsu.png"
              alt="logo"
            />
          </div>
          <div
            id="nameContainer"
            className="w-4/5 flex items-center font-black tracking-tighter justify-start"
          >
            Kitsu.io
          </div>
        </div>
        <div id="bottom-container" className="  mt-4">
          <p>
            Share anime and manga experiences, get recommendations and see what
            friends are watching or reading.
          </p>
          <div className="px-6 py-4">
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2 border-2  ">
              #Oauth
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2 border-2 ">
              #Anime
            </span>
            <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2 border-2 ">
              #Rankings
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Apis;
