import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../../configs/fbConfig";
import Api from "./Api";

const ApiContainer = () => {
  const dispatch = useDispatch();
  const apis = useSelector((state) => state.apiReducer.apis);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const limit = 9;
  useEffect(() => {
    if (apis.length > 0) return;
    async function getData() {
      setIsLoading(true);
      try {
        const response = await db
          .collection("api-collection")
          .orderBy("createdAt")
          .limit(limit)
          .get();
        const dataSend = [];
        response.forEach((document) => {
          dataSend.push({ ...document.data(), uid: document.id });
        });
        dispatch({ type: "SET_API_DATA", payload: dataSend });
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    }
    getData();
  }, [dispatch, apis.length]);

  const getMore = async (e) => {
    e.preventDefault();
    const last = apis[apis.length - 1];
    console.log(last);
    setIsLoading(true);
    try {
      const response = await db
        .collection("api-collection")
        .limit(limit - 4)
        .orderBy("createdAt")
        .startAfter(last.createdAt)
        .get();
      const dataSend = [];
      response.forEach((document) => {
        dataSend.push(document.data());
      });
      dispatch({ type: "SET_API_DATA", payload: apis.concat(dataSend) });
      setIsLoading(false);
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda);
  };
  return (
    <div className="container mx-auto pb-6 w-full h-full flex flex-wrap">
      <form className="w-full max-w-sm mx-auto pt-6" onSubmit={onFormSubmit}>
        <div
          className={
            isDarkMode
              ? "flex items-center border-b border-pink-dark py-2 "
              : "flex items-center border-b border-red-500 py-2"
          }
        >
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-500 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="¿Qué API buscas?"
            aria-label="Full name"
            onChange={handleChange}
          />
          <button
            className={
              isDarkMode
                ? "flex-shrink-0 bg-pink-dark hover:bg-pink-hover border-pink-hover -hover text-sm text-white py-1 px-2 rounded"
                : "flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 text-sm text-white py-1 px-2 rounded"
            }
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
          {apis.map((api) => {
            return <Api data={api} key={api.uid} />;
          })}
        </div>
      )}
      {!isLoading && (
        <button
          className={
            isDarkMode
              ? "border-2 bg-pink-dark rounded border-pink-dark tracking-widest hover:bg-pink-hover hover:border-pink-hover mx-auto relative w-1/4 text-white  font-black bottom-0 p-2 mt-4 "
              : "border-2 rounded border-red-700 tracking-widest hover:bg-red-600  mx-auto relative w-1/4 text-white bg-red-500 font-black bottom-0 p-2 mt-4 "
          }
          onClick={getMore}
        >
          Cargar más
        </button>
      )}
    </div>
  );
};
export default ApiContainer;
