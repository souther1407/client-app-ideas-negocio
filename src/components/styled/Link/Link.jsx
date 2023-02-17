import React from "react";
import { Link as RouterDomLink } from "react-router-dom";

const Link = ({ to, children, extern, ...othersProp }) => {
  if (extern)
    return (
      <a href={to} {...othersProp}>
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
