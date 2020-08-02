import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { getApis } from "../../store/actions/apiActions";
import Api from "./Api";

const ApiContainer = ({ dispatch }) => {
  const { apis } = useSelector(mapState);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    if (apis.length === 0) {
      dispatch(getApis());
    }
  }, [apis]);
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
      <div className="container mx-auto px-2 w-full h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 mt-12">
        {apis && //valido que existan apis
          apis.map((api) => {
            return <Api data={api} key={api.id} />;
          })}
      </div>
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
