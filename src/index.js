// Importing React
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Importing app component
import App from "./App";

// Importing MUI
import { CssBaseline } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
  <BrowserRouter>
   <CssBaseline />
   <App />
  </BrowserRouter>
 </React.StrictMode>
);
reportWebVitals();
