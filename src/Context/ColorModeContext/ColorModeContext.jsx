import React from "react";
import { useState } from "react";

export const context = React.createContext(null);

export const ColorModeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  return (
    <context.Provider value={{ changeTheme, theme }}>
      {children}
    </context.Provider>
  );
};
