const initialState = {
  projects: [
    {
      name: "🎴Hatsu",
      webURL: "",
      repositoryURL: "",
      usedAPI: "PublicAPIS",
      usedAPIURL: "https://www.public-apis.io",
      description:
        "Listado de APIs públicas, además, te da la posibilidad de obtener alguna de manera random para poder comenzar tu próximo proyecto 😋",
      technologies: ["React", "Firebase", "Redux", "TailwindCSS"],
      imageURL: "",
      wasApproved: true,
    },
  ],
};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      state.projects = action.payload;
      return state;
    default:
      return state;
  }
};

export default projectReducer;
