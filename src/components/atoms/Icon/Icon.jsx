import React from "react";
import { AiOutlineLoading3Quarters, AiFillCreditCard } from "react-icons/ai";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillBriefcaseFill,
} from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { BiBrain, BiHelpCircle } from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import {
  FaMoneyBillWave,
  FaUserCircle,
  FaHeadSideVirus,
  FaLongArrowAltDown,
  FaShieldAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { AiOutlineMail, AiOutlineBulb, AiOutlineUserAdd } from "react-icons/ai";
import { GiGears } from "react-icons/gi";
import { TfiArrowsCorner } from "react-icons/tfi";
import { BsArrowLeft, BsArrowRight, BsImage } from "react-icons/bs";
import styles from "./icon.module.css";

const Icon = ({ type, size }) => {
  const props = {
    size: size || "100%",
    className: `${styles.icon}`,
  };
  const icons = {
    loading: <AiOutlineLoading3Quarters {...props} />,
    card: <AiFillCreditCard {...props} />,
    arrowDown: <SlArrowDown {...props} />,
    arrowUp: <SlArrowUp {...props} />,
    bulb: <AiOutlineBulb {...props} />,
    userplus: <AiOutlineUserAdd {...props} />,
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
    leftArrow: <BsArrowLeft {...props} />,
    rightArrow: <BsArrowRight {...props} />,
    image: <BsImage {...props} />,
    downArrow: <FaLongArrowAltDown {...props} />,
    mail: <AiOutlineMail {...props} />,
    shield: <FaShieldAlt {...props} />,
    bars: <FaBars {...props} />,
    help: <BiHelpCircle {...props} />,
    close: <FaTimes {...props} />,
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
