const initialState = {
  apis: [
    {
      id: 1,
      url: "",
      name: "Kitsu",
      description:
        "Share anime and manga experiences, get recommendations and see what friends are watching or reading",
      img: "images/kitsu.png",
      tags: ["Oauth", "Anime", "Rankings"],
    },
    {
      id: 2,
      url: "",
      name: "Open Weather",
      description:
        "Make Open Weather API and bypass the free limit without code. Open Weather is most famous API to get Current weather and forecasts in your city with their open API with Access Token.",
      img: "images/kitsu.png",
      tags: ["Weather", "ApiKey"],
    },
    {
      id: 3,
      url: "",
      name: "7Timer",
      description:
        "7Timer! is a series of web-based meteorological forecast products, mainly derived from the NOAA/NCEP-based numeric weather model, the Global Forecast System (GFS).",
      img: "images/kitsu.png",
      tags: ["Weather", "Oauth"],
    },
  ],
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_API":
      state.apis.push(action.payload);
      console.log("se agrego la api", action.payload);
  }
  return state;
};

export default apiReducer;
