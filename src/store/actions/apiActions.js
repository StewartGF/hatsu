import { db, firestore } from "../../configs/fbConfig";
import { toast } from "react-toastify";

export const createApi = (api) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      //REFERENCES--------
      const apiCollectionRef = db.collection("api-collection");
      const AggregateApiCollectionRef = db
        .collection("aggregation")
        .doc("api-collection");
      //REFERENCES--------

      const newApi = {
        ...api,
        createdAt: new Date(),
        wasApproved: true,
      };

      await apiCollectionRef.add(newApi);
      const increment = firestore.FieldValue.increment(1);
      await AggregateApiCollectionRef.update({ count: increment });
      dispatch({ type: "UPDATE_COUNT_BY_ONE" });
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
