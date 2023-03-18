import React from "react";
import styles from "./select.module.css";
import ReactSelect from "react-select";

const Select = ({ options, ...otherProps }) => {
  return (
    <ReactSelect
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          background: "none",
          color: "white",
          borderColor: state.isFocused ? "transparent" : "transparent",
          height: "42px",
        }),
        container: (baseStyles, state) => ({
          ...baseStyles,
          background: "#0C2D40",
          borderColor: "transparent",
          borderRadius: "4px",
          color: "white",
          width: "85px",
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "#1E1C24",
          border: "none",
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: "white",
          fontSize: "16px",
        }),
      }}
      options={options}
      defaultValue={options[0]}
      {...otherProps}
    />
  );
};

export default Select;
