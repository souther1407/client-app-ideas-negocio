import React from "react";
import Link from "../../../../styled/Link/Link";
import Icon from "../../../../styled/Icon/Icon";
import styles from "./navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link to={"/"}>
        <i className={styles.element}>
          <Icon type={"ai"} />
        </i>
      </Link>
      <Link to={"/"}>
        <i className={styles.element}>
          <Icon type={"case"} />
        </i>
      </Link>
    </div>
  );
};

export default Navigation;
