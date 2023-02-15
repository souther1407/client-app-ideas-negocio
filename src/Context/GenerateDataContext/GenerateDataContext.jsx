import React from "react";
import { useState } from "react";

export const context = React.createContext(null);

export const GenerateDataContext = ({ children }) => {
  const [data, setData] = useState("");

  const updateData = (data) => {
    setData(data);
  };

  return (
    <context.Provider value={{ data, updateData }}>{children}</context.Provider>
  );
};
