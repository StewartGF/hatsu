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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk) // middleware para hacer llamadas asíncronas
);
if (document.getElementById("root").hasChildNodes()) {
  ReactDOM.hydrate(
    <Provider store={store}>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
} else {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </Provider>,
    document.getElementById("root")
  );
}
