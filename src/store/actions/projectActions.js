import { db, firestore } from "../../configs/fbConfig";
import { toast } from "react-toastify";

export const createProject = (project) => {
  return async (dispatch) => {
    dispatch({ type: "LOADING" });
    try {
      // references
      const projectRef = db.collection("project-collection");
      const AggregateProjectCollectionRef = db
        .collection("aggregation")
        .doc("project-collection");
      // references
      const newProject = {
        ...project,
        createdAt: new Date(),
        wasApproved: true,
      };

      await projectRef.add(newProject);
      const increment = firestore.FieldValue.increment(1);
      await AggregateProjectCollectionRef.update({ count: increment });
      dispatch({ type: "UPDATE_COUNT_BY_ONE" });
      dispatch({ type: "LOADING" });
      toast("🧙🏻‍♂️ Se agregó el proyecto !", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
