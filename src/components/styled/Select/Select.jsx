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
        }),
        container: (baseStyles, state) => ({
          ...baseStyles,
          background: "none",
          color: "white",
          width: "80px",
          height: "30px",
        }),
        menu: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "#1E1C24",
          border: "1px solid white",
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: "white",
          fontSize: "14px",
        }),
      }}
      options={options}
      defaultValue={options[0]}
      {...otherProps}
    />
  );
};

export default Select;
