import { db, firestore } from "../../configs/fbConfig";
import { pushId } from "../../utils/pushid";

export const createApi = (api) => {
  return async (dispatch, getState) => {
    dispatch({ type: "LOADING" });
    try {
      const newApi = {
        uid: pushId(),
        ...api,
        authorName: "Stewart",
        authorLastName: "Granger Flores",
        authorId: 123123,
        createdAt: new Date(),
      };
      await db
        .collection("api-collection")
        .doc("api-store")
        .update({
          api: firestore.FieldValue.arrayUnion(newApi),
        });
      dispatch({ type: "ADD_API", payload: newApi });
      dispatch({ type: "LOADING" });
    } catch (error) {
      dispatch({ type: "LOADING" });
      console.log(error);
    }
    // try {
    //   const newApi = {
    //     ...api,
    //     authorName: "Stewart",
    //     authorLastName: "Granger Flores",
    //     authorId: 123123,
    //     createdAt: new Date(),
    //   };
    //   await db.collection("apis").add(newApi);
    //   dispatch({ type: "ADD_API", payload: newApi });
    // } catch (error) {
    //   dispatch({ type: "ADD_API_ERROR", payload: error });
    // }
  };
};

export const getApis = () => {
  return async (dispatch, getState) => {
    dispatch({ type: "LOADING" });
    try {
      if (getState().apiReducer.apis.length === 0) {
        const response = await db.collection("api-collection").get();
        console.log("una llamada a la api");
        const dataSend = [];
        response.forEach((document) => {
          dataSend.push(document.data().api); // pasamos toda la data, además, le creamos un campo id con el id del documento de Firebase
        });
        dispatch({ type: "SET_API_DATA", payload: dataSend });
        dispatch({ type: "LOADING" });
      } else {
        return;
      }
    } catch (error) {
      dispatch({ type: "LOADING" });
      console.log("error", error);
    }
  };
};
