import React, { useState, useRef, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Loading from "../Loading";
//CUSTOM HOOKS
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

const AddProject = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.apiReducer.loading);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const [nameInput, setNameInput] = useFocus();
  const [webURL, setWebURL] = useFocus();
  const [usedAPI, setUsedAPI] = useFocus();
  const [usedAPIURL, setUsedAPIURL] = useFocus();
  const [imageURL, setimageURL] = useFocus();
  const [descriptionInput, setDescriptionInput] = useFocus();
  const [repositoryURL, setRepositoryURL] = useFocus();
  const [data, setData] = useState({
    name: "",
    webURL: "",
    repositoryURL: "",
    usedAPI: "",
    usedAPIURL: "",
    description: "",
    imageURL: "",
  });
  const [technologies, setTechnologies] = useState([]);
  const [technologyText, setTechnologyText] = useState("");
  const [disable, setDisable] = useState(false);

  const clearInputs = () => {
    setData({
      name: "",
      description: "",
      url: "",
      imageUrl: "",
    });
    setTechnologies([]);
    setTechnologyText("");
    setDisable(false);
  };

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleTechnologySubmit = (e) => {
    if (technologyText !== "") {
      e.preventDefault();
      setTechnologies([...technologies, technologyText]);
      setTechnologyText("");
      if (technologies.length === 2) {
        setDisable(true);
      }
    } else {
      e.preventDefault();
      return;
    }
  };

  const onInputTechnologiesChange = (e) => {
    e.preventDefault();
    setTechnologyText(e.target.value);
  };

  const handleDeleteTechnology = (index) => {
    let array = [...technologies];
    array.splice(index, 1);
    setTechnologies(array);
    console.log(data);
    if (disable) {
      if (array.length <= 2) {
        setDisable(false);
      }
    }
  };
  const dropAnAlert = () => {
    toast.error("😱 Por favor, llena todos los campos", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const validateSubmit = (e) => {
    e.preventDefault();
    if (data.name === "") {
      setNameInput();
      dropAnAlert();
      return;
    }
    if (data.url === "") {
      setWebURL();
      dropAnAlert();
      return;
    }
    if (data.description === "") {
      setDescriptionInput();
      dropAnAlert();
      return;
    }
    if (data.imageUrl === "") {
      setRepositoryURL();
      dropAnAlert();
      return;
    }
    if (data.usedAPI === "") {
      setUsedAPI();
      dropAnAlert();
      return;
    }
    if (data.usedAPIURL === "") {
      setUsedAPIURL();
      dropAnAlert();
      return;
    }
    if (data.imageURL === "") {
      setimageURL();
      dropAnAlert();
      return;
    }

    handleSubmitApi(e);
  };

  const handleSubmitApi = (e) => {
    e.preventDefault();
    let dataSend = data;
    dataSend["technologies"] = technologies;
    clearInputs();
    // dispatch(createApi(dataSend));
  };
  return (
    <div>
      <div className="pb-2">
        <div className="container mx-auto text-center relative align-middle pt-2">
          <div id="title" className="text-3xl">
            <p>
              <span role="img" aria-label="img">
                📜
              </span>
              Formulario para agregar un proyecto
            </p>
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-6  md:items-center mb-2">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="name"
            >
              Nombre del proyecto
            </label>
          </div>
          <div className="md:w-full">
            <input
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="name"
              type="text"
              ref={nameInput}
              value={data.name}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="url"
            >
              URL del proyecto desplegado
            </label>
          </div>
          <div className="md:w-full">
            <input
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="webURL"
              ref={webURL}
              type="text"
              value={data.webURL}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="url"
            >
              URL del repositorio
            </label>
          </div>
          <div className="md:w-full">
            <input
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="repositoryURL"
              ref={repositoryURL}
              type="text"
              value={data.repositoryURL}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="url"
            >
              API que usaste
            </label>
          </div>
          <div className="md:w-full">
            <input
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="usedAPI"
              ref={usedAPI}
              type="text"
              value={data.usedAPI}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="url"
            >
              URL de la API que usaste
            </label>
          </div>
          <div className="md:w-full">
            <input
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="usedAPIURL"
              ref={usedAPIURL}
              type="text"
              value={data.usedAPIURL}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="description"
            >
              Descripción
            </label>
          </div>
          <div className="md:w-full">
            <textarea
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="description"
              type="text"
              ref={descriptionInput}
              value={data.description}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <div className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-6">
          <div className="md:w-full flex items-start">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="imageUrl"
            >
              URL de la imagen
            </label>
          </div>
          <div className="md:w-full">
            <input
              className={
                isDarkMode
                  ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                  : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
              }
              name="imageURL"
              type="text"
              ref={imageURL}
              value={data.imageURL}
              onChange={handleDataChange}
            />
          </div>
        </div>
        <form
          className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2"
          onSubmit={handleTechnologySubmit}
        >
          <div className="md:w-full flex align-start ">
            <label
              className={
                isDarkMode
                  ? "block text-white font-bold md:text-right mb-1 md:mb-0 pr-4"
                  : "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              }
              htmlFor="inline-full-name"
            >
              Tecnologías usadas
            </label>
          </div>
          <div
            className={
              disable
                ? "md:w-full flex items-center border-b border-gray-500 py-2"
                : `md:w-full flex items-center border-b ${
                    isDarkMode ? "border-pink-dark" : "border-red-500"
                  } py-2`
            }
          >
            <input
              className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="inline-full-name"
              type="text"
              onChange={onInputTechnologiesChange}
              value={technologyText}
              disabled={disable}
              placeholder={
                disable
                  ? "Máx 5 tecnologías"
                  : "Ej: React, Vue, Java, C#, Python, Flutter etc.."
              }
            />
            <button
              type="submit"
              className={
                disable
                  ? "flex-shrink-0 bg-gray-500 hover:bg-gray-500 border-gray-500 hover:border-gray-500 focus:outline-none text-sm border-2 text-white py-1 px-2 md:px-6 rounded"
                  : `${
                      isDarkMode
                        ? "bg-pink-dark hover:bg-pink-hover border-pink-dark hover:border-pink-hover font-black text-xl"
                        : " bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 font-black text-xl"
                    } flex-shrink-0 text-sm border-2 text-white py-1 px-2 md:px-6 rounded`
              }
            >
              +
            </button>
          </div>
        </form>
        <div className="container w-full mx-auto mt-2 flex justify-center flex-wrap md:items-center mb-6">
          {technologies.length > 0 ? (
            technologies.map((tag, index) => {
              return (
                <Fragment key={index}>
                  <span
                    className={
                      isDarkMode
                        ? "my-2 inline-block bg-dark-100 rounded-full px-3 py-1 text-sm font-semibold  border-2 border-pink-dark ml-2 xl:ml-8"
                        : "my-2 inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold  border-2 ml-2 xl:ml-8"
                    }
                    key={tag}
                  >
                    #{tag}
                    <button
                      onClick={() => handleDeleteTechnology(index)}
                      className={
                        isDarkMode
                          ? "px-2 mx-2 mr-auto my-auto text-white font-black rounded-full bg-pink-dark focus:outline-none"
                          : "px-2 mx-2 mr-auto my-auto text-white font-black rounded-full bg-red-700 focus:outline-none"
                      }
                    >
                      x
                    </button>
                  </span>
                </Fragment>
              );
            })
          ) : (
            <p></p>
          )}
        </div>
        <div className="container w-full mx-auto mt-12 flex justify-center flex-wrap md:items-center mb-6">
          <button
            onClick={validateSubmit}
            className={
              isDarkMode
                ? "flex-shrink-0  font-black bg-pink-dark hover:bg-pink-hover border-pink-dark hover:border-pink-hover  focus:outline-none text-sm border-4 text-white py-1 px-6 md:px-8 rounded"
                : "flex-shrink-0  font-black bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700  focus:outline-none text-sm border-4 text-white py-1 px-6 md:px-8 rounded"
            }
          >
            Agregar API !
          </button>
        </div>
        {loading ? <Loading /> : <></>}
      </div>
    </div>
  );
};

export default AddProject;
