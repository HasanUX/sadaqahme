import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StateProvider from "./Context/StateProvider";
import Reducer, { initialState } from "./Context/Reducer";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.min.css";
import "animate.css";
import "./sass/style.css";

ReactDOM.render(

    <StateProvider initialState={initialState} Reducer={Reducer}>
      <App />
    </StateProvider>,
  document.getElementById("root")
);
