import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import styles from "./icon.module.css";
const Icon = ({ type }) => {
  const props = {
    size: "100%",
    className: `${styles.icon}`,
  };
  const icons = {
    loading: <AiOutlineLoading3Quarters {...props} />,
    sun: <BsFillSunFill {...props} />,
    moon: <BsFillMoonFill {...props} />,
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
