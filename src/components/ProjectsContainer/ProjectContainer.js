import React, { useState, useEffect } from "react";
import { db } from "../../configs/fbConfig";
import { useSelector, useDispatch } from "react-redux";
import Project from "./Project";
// import { batchProjectJSON } from "../../batch";
// import { createProject } from "../../store/actions/projectActions";

const ProjectContainer = () => {
  const projects = useSelector((state) => state.projectReducer.projects);
  console.log(JSON.stringify(projects));
  const count = useSelector((state) => state.projectReducer.count);
  const isDarkMode = useSelector((state) => state.themeReducer.isDarkMode);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 5;
  const dispatch = useDispatch();

  useEffect(() => {
    if (projects.length > 0) return; // para evitar que vuelva a cargar data si ya entró a la vista una vez.
    async function getData() {
      setIsLoading(true);
      try {
        const projectsCollectionRef = db.collection("project-collection");
        const projectsCountRef = db
          .collection("aggregation")
          .doc("project-collection");
        const responseCount = await projectsCountRef.get();
        const count = await responseCount.data().count;
        //dispatch
        dispatch({ type: "SET_PROJECTS_COUNT", payload: count });
        const response = await projectsCollectionRef
          .orderBy("createdAt")
          .limit(limit)
          .get();
        let dataSend = [];
        response.forEach((document) => {
          dataSend.push({ ...document.data(), uid: document.id });
        });
        //dispatch
        dispatch({ type: "SET_PROJECTS", payload: dataSend });
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [dispatch, projects.length]);
  // const loadDatatoDb = () => {
  //   batchProjectJSON.forEach((project) => {
  //     dispatch(createProject(project));
  //   });
  // };
  return (
    <div className="container mx-auto text-center">
      {/* <button
        className="px-4 py-2 bg-red-500 font-black text-white"
        onClick={loadDatatoDb}
      >
        Cargar
      </button> */}
      <div className="text-4xl pt-3 pb-2">
        <span role="img" aria-label="emoji">
          👨🏻‍💻
        </span>
        Proyectos
      </div>
      {isLoading && projects.length === 0 ? (
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
        <>
          {projects.length === 0 ? (
            <div className="container mx-auto text-center relative text-black align-middle pt-2">
              <div id="title" className="text-3xl text-gray-600 m-auto pt-32">
                <p>
                  No hay proyectos que mostrar....
                  <span role="img" aria-label="img">
                    🤷🏻‍♂️
                  </span>
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid gap-4 m-6 grid-cols-1">
                {projects.map((project, index) => {
                  return <Project data={project} key={project.uid} />;
                })}
              </div>
              {console.log("count", count)}
              {console.log("projects.length", projects.length)}
              {count !== projects.length && (
                <button
                  className={`px-4 py-2 text-white font-black ${
                    isDarkMode ? "bg-pink-dark" : "bg-red-500"
                  } rounded`}
                >
                  Cargar más
                </button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default ProjectContainer;
