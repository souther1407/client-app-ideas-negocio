import React from "react";
import { Link as RouterDomLink } from "react-router-dom";
import styles from "./link.module.css";
const Link = ({ to, children, extern, ...othersProp }) => {
  if (extern)
    return (
      <a className={styles.link} href={to} {...othersProp}>
        {children}
      </a>
    );
  return (
    <RouterDomLink to={to} {...othersProp}>
      {children}
    </RouterDomLink>
  );
};

export default Link;
