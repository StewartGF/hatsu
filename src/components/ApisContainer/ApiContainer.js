import React from "react";
import Api from "./Api";

const ApiContainer = () => {
  return (
    <div className="container mx-auto  w-full h-full">
      <form className="w-full max-w-sm mx-auto pt-6">
        <div className="flex items-center border-b border-red-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="¿Qué API buscas?"
            aria-label="Full name"
          />
          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Buscar
          </button>
        </div>
      </form>
      <div className="container mx-auto px-2 w-full h-full grid grid-cols-3 gap-8 mt-12">
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
        <Api />
      </div>
    </div>
  );
};

export default ApiContainer;
