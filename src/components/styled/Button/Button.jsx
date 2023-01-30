import React from "react";
import styles from "./button.module.css";
import { context } from "../../../context/ColorModeContext/ColorModeContext";
import { useContext } from "react";
const Button = ({ children, color = "primary", onClick, ...otherProps }) => {
  const { theme } = useContext(context);
  return (
    <button
      className={`${styles.button} ${styles[color]} ${styles[theme]}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
