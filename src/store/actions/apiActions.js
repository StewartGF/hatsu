import { db } from "../../configs/fbConfig";
import { toast } from "react-toastify";

export const createApi = (api) => {
  return async (dispatch, getState) => {
    dispatch({ type: "LOADING" });
    try {
      const newApi = {
        ...api,
        createdAt: new Date(),
        wasApproved: true,
      };
      await db.collection("api-collection").add(newApi);
      dispatch({ type: "ADD_API", payload: newApi });
      dispatch({ type: "LOADING" });
      toast("🧙🏻‍♂️ Se agregó la API", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      dispatch({ type: "ADD_API_ERROR", payload: error });
    }
  };
};
