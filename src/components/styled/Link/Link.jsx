import React from "react";
import { Link as RouterDomLink } from "react-router-dom";

const Link = ({ to, children, extern }) => {
  if (extern) return <a href={to}>{children}</a>;
  return <RouterDomLink to={to}>{children}</RouterDomLink>;
};

export default Link;
