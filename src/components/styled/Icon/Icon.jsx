import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { BiBrain } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import { FaMoneyBillWave, FaUserCircle, FaHeadSideVirus } from "react-icons/fa";
import { GiGears } from "react-icons/gi";
import { TfiArrowsCorner } from "react-icons/tfi";
import styles from "./icon.module.css";

const Icon = ({ type }) => {
  const props = {
    size: "100%",
    className: `${styles.icon}`,
  };
  const icons = {
    loading: <AiOutlineLoading3Quarters {...props} />,
    arrowDown: <SlArrowDown {...props} />,
    arrowUp: <SlArrowUp {...props} />,
    sun: <BsFillSunFill {...props} />,
    moon: <BsFillMoonFill {...props} />,
    ai: <BiBrain {...props} />,
    location: <ImLocation {...props} />,
    budget: <FaMoneyBillWave {...props} />,
    user: <FaUserCircle {...props} />,
    case: <BsFillBriefcaseFill {...props} />,
    aiHead: <FaHeadSideVirus {...props} />,
    gears: <GiGears {...props} />,
    arrows: <TfiArrowsCorner {...props} />,
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
