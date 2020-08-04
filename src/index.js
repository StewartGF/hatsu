import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/main.css";
import "./assets/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // middleware para hacer llamadas asíncronas
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
