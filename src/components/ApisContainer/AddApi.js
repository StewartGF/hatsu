import React, { useState, Fragment, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createApi } from "../../store/actions/apiActions";
import Loading from "../Loading";
import { toast } from "react-toastify";
//CUSTOM HOOKS
const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus();
  };
  return [htmlElRef, setFocus];
};

const AddApi = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  const loading = useSelector((state) => state.apiReducer.loading);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const [nameInput, setNameInput] = useFocus();
  const [urlInput, setUrlInput] = useFocus();
  const [descriptionInput, setDescriptionInput] = useFocus();
  const [urlImageInput, setUrlImageInput] = useFocus();
  const [data, setData] = useState({
    name: "",
    description: "",
    url: "",
    imageUrl: "",
  });
  const [tags, setTags] = useState([]);
  const [tagText, setTagText] = useState("");
  const [disable, setDisable] = useState(false);

  const clearInputs = () => {
    setData({
      name: "",
      description: "",
      url: "",
      imageUrl: "",
    });
    setTags([]);
    setTagText("");
    setDisable(false);
  };

  const handleDataChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleTagsSubmit = (e) => {
    if (tagText !== "") {
      e.preventDefault();
      setTags([...tags, tagText]);
      setTagText("");
      if (tags.length === 2) {
        setDisable(true);
      }
    } else {
      e.preventDefault();
      return;
    }
  };

  const onInputTagChange = (e) => {
    e.preventDefault();
    setTagText(e.target.value);
  };

  const handleDeleteTag = (index) => {
    let array = [...tags];
    array.splice(index, 1);
    setTags(array);
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
      setUrlInput();
      dropAnAlert();
      return;
    }
    if (data.description === "") {
      setDescriptionInput();
      dropAnAlert();
      return;
    }
    if (data.imageUrl === "") {
      setUrlImageInput();
      dropAnAlert();
      return;
    }

    handleSubmitApi(e);
  };

  const handleSubmitApi = (e) => {
    e.preventDefault();
    let dataSend = data;
    dataSend["tags"] = tags;
    clearInputs();
    dispatch(createApi(dataSend));
  };
  return (
    <>
      {user ? (
        <div className="container mx-auto text-center relative align-middle pt-2">
          <div className="pb-2">
            <div id="title" className="text-3xl">
              <p>
                <span role="img" aria-label="img">
                  📜
                </span>
                Formulario para crear una API
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
                Nombre de la API
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
                URL de la API
              </label>
            </div>
            <div className="md:w-full">
              <input
                className={
                  isDarkMode
                    ? "bg-dark-100 appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-dark-100 focus:border-pink-dark"
                    : "bg-transparent appearance-none border-2 border-gray-400 rounded w-full py-2 px-4  leading-tight focus:outline-none focus:bg-white focus:border-red-400"
                }
                name="url"
                ref={urlInput}
                type="text"
                value={data.url}
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
                name="imageUrl"
                type="text"
                ref={urlImageInput}
                value={data.imageUrl}
                onChange={handleDataChange}
              />
            </div>
          </div>
          <form
            className="container w-3/4 lg:w-2/5 mx-auto mt-4  md:items-center mb-2"
            onSubmit={handleTagsSubmit}
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
                Tags
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
                onChange={onInputTagChange}
                value={tagText}
                disabled={disable}
                placeholder={
                  disable
                    ? "Máx 3 tags"
                    : "Ej: Ciencia, Finanzas, Tecnología, etc.."
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
            {tags.length > 0 ? (
              tags.map((tag, index) => {
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
                        onClick={() => handleDeleteTag(index)}
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
      ) : (
        <div className="container mx-auto text-center relative align-middle pt-32">
          <div className="pb-2">
            <div id="title" className="text-3xl">
              <p>
                <span role="img" aria-label="img">
                  😫
                </span>
                <br />
                Lo siento !
              </p>
              <p>Tienes que estar logueado para agregar una API</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddApi;
