import React, { useState } from "react";
import styles from "./drawer.module.css";
import IconButton from "../IconButton/IconButton";

const Drawer = ({ renderIcon, renderContent }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.drawer}>
      {renderIcon(() => setShowMenu(true), showMenu)}
      <section className={`${styles.subMenu} ${showMenu && styles.show}`}>
        <IconButton icon={"close"} onClick={() => setShowMenu(false)} />
        {renderContent(showMenu)}
      </section>
    </div>
  );
};

export default Drawer;
