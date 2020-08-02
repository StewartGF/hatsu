export const createApi = (api) => {
  return (dispatch, getState) => {
    //async call a la base de datos firebase
    dispatch({ type: "ADD_API", payload: api });
  };
};
