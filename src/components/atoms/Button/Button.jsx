import React from "react";
import styles from "./button.module.css";
import { context } from "../../../Context/ColorModeContext/ColorModeContext";
import { useContext } from "react";

const Button = ({
  w,
  width,
  children,
  flexible,
  type = "fulled",
  color = "primary",
  onClick,
  ...otherProps
}) => {
  const { theme } = useContext(context);
  return (
    <button
      style={{ width: width ?? "inherit" }}
      className={`${styles.button} ${styles[type]} ${styles[color]} ${
        styles[theme]
      } ${w && styles.w} ${flexible && styles.flexible}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
