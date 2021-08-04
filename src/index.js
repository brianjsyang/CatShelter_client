import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import './index.css'
import { BrowserRouter } from "react-router-dom";  //keep UI in sync with the URL

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);