import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getApis } from "../../store/actions/apiActions";
import Api from "./Api";

const ApiContainer = ({ dispatch }) => {
  const { apis } = useSelector(mapState);
  const [busqueda, setBusqueda] = useState("");
  useEffect(() => {
    dispatch(getApis());
  }, [dispatch]);

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda);
  };
  return (
    <div className="container mx-auto pb-6 w-full h-full">
      <form className="w-full max-w-sm mx-auto pt-6" onSubmit={onFormSubmit}>
        <div className="flex items-center border-b border-red-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="¿Qué API buscas?"
            aria-label="Full name"
            onChange={handleChange}
          />
          <button
            className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Buscar
          </button>
        </div>
      </form>
      {apis.length === 0 ? (
        <div className="container mx-auto text-center relative text-black align-middle pt-2">
          <div id="title" className="text-3xl text-gray-600 m-auto pt-32">
            <p>
              <span role="img" aria-label="img">
                🧙🏻‍♂️
              </span>
              Cargando....
            </p>
          </div>
        </div>
      ) : (
        <div className="container mx-auto px-2 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12">
          {apis[0].map((api) => {
            return <Api data={api} key={api.uid} />;
          })}
        </div>
      )}
    </div>
  );
};
const mapState = (state) => {
  return {
    //se busca del state, en el rootReducer la propiedad apiReducer que contiene todo lo de apiReducer y se rescata del initialState "apis" que contiene todas las apis
    apis: state.apiReducer.apis,
  };
};
export default connect(mapState)(ApiContainer);
