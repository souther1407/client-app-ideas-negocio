import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ColorModeContext } from "./Context/ColorModeContext/ColorModeContext";
import { GenerateDataContext } from "./Context/GenerateDataContext/GenerateDataContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";

const theme = extendTheme({
  colors: {
    primaryDark: {
      base: "#2D4356;",
    },
    bgBlueDark: {
      base: "#061e32",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <ColorModeContext>
      <GenerateDataContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </GenerateDataContext>
    </ColorModeContext>
  </ChakraProvider>
);
