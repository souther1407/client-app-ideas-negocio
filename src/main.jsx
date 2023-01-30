import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ColorModeContext } from "./Context/ColorModeContext/ColorModeContext";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primaryDark: {
      base: "#589B88;",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeContext>
        <App />
      </ColorModeContext>
    </ChakraProvider>
  </React.StrictMode>
);
