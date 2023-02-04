import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ColorModeContext } from "./Context/ColorModeContext/ColorModeContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  colors: {
    primaryDark: {
      base: "#2D4356;",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ColorModeContext>
    </ChakraProvider>
  </React.StrictMode>
);
