import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ColorModeContext } from "./Context/ColorModeContext/ColorModeContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ColorModeContext>
      <App />
    </ColorModeContext>
  </React.StrictMode>
);
