import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";

//Injection des données du root dans le DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter children={<App />}/>
  </React.StrictMode>
);
reportWebVitals()