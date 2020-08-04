import React from "react";

const Apis = (props) => {
  const { data } = props;
  return (
    <>
      <div className="w-full border shadow-lg rounded p-4 ">
        <a href={data.url} target="_blank" rel="noopener noreferrer">
          <div id="top-container" className="text-xl flex align-center">
            <div id="imageContainer" className="w-1/5 flex mx-auto">
              <img
                className="w-10  h-10 rounded-full mx-auto"
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
                      className="inline-block bg-red-100 rounded-full m-1 px-2 py-1 text-xs xl:text-sm  font-semibold text-gray-700  border-2 "
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
