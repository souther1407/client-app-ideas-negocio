import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import Login from "../Login/Login";
import Navigation from "./components/Navigation/Navigation";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <ChangeLanguage />
      <Navigation />
      <Login />
    </div>
  );
};

export default Nav;
