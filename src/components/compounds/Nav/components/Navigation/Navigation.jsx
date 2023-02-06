import React from "react";
import Link from "../../../../styled/Link/Link";
import Icon from "../../../../styled/Icon/Icon";
import styles from "./navigation.module.css";
import { useLocation } from "react-router-dom";
import {
  LOGIN,
  MAIN,
  REGISTER,
  RESPONSE,
} from "../../../../../utils/constants/routes";
const Navigation = () => {
  const location = useLocation();

  return (
    <div className={styles.navigation}>
      <Link to={MAIN}>
        <i
          className={`${styles.element} ${
            location.pathname === MAIN && styles.selected
          }`}
        >
          <Icon type={"ai"} />
        </i>
      </Link>
      <Link to={RESPONSE}>
        <i
          className={`${styles.element} ${
            location.pathname === RESPONSE && styles.selected
          }`}
        >
          <Icon type={"case"} />
        </i>
      </Link>
    </div>
  );
};

export default Navigation;
