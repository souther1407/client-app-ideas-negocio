import React from "react";
import styles from "./button.module.css";
import { context } from "../../../Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";

const Button = ({
  w,
  children,
  type = "fulled",
  color = "primary",
  onClick,
  ...otherProps
}) => {
  const { theme } = useContext(context);
  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles[color]} ${
        styles[theme]
      } ${w && styles.w}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
