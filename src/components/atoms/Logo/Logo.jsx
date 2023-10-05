import React from "react";
import styles from "./logo.module.css";
import logo from "../../../assets/Nuevo Logo.svg";
const Logo = ({ size }) => {
  return <img src={logo} className={styles.logo} />;
};
export default Logo;
