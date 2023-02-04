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
        menu: (baseStyles, state) => ({
          ...baseStyles,
          background: "none",
          border: "1px solid white",
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: "white",
        }),
      }}
      options={options}
      defaultValue={options[0]}
      {...otherProps}
    />
  );
};

export default Select;
