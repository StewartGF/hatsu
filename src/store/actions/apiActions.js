export const createApi = (api) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const db = getFirestore(); //referencia a nuestra base de datos firestore
    try {
      const newApi = {
        ...api,
        authorName: "Stewart",
        authorLastName: "Granger Flores",
        authorId: 123123,
        createdAt: new Date(),
      };
      await db.collection("apis").add(newApi);
      dispatch({ type: "ADD_API", payload: newApi });
    } catch (error) {
      dispatch({ type: "ADD_API_ERROR", payload: error });
    }
  };
};

export const getApis = () => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    try {
      const db = getFirestore();
      const response = await db.collection("apis").get();
      console.log("una llamada a la api");
      const dataSend = [];
      response.forEach((document) => {
        dataSend.push({ ...document.data(), id: document.id }); // pasamos toda la data, además, le creamos un campo id con el id del documento de Firebase
      });
      dispatch({ type: "SET_API_DATA", payload: dataSend });
    } catch (error) {
      console.log("error", error);
    }
  };
};
