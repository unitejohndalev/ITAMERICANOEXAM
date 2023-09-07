import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
// import { BrowserRouter as Router } from "react-router-dom";

import { HashRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
  <React.StrictMode>
      <App />
    </React.StrictMode>
  </HashRouter>
);
