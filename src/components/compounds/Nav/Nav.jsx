import React, { useEffect, useState } from "react";
import styles from "./nav.module.css";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import Login from "../Login/Login";
import Navigation from "./components/Navigation/Navigation";
import { auth } from "../../../firebase";
import Logout from "../Logout/Logout";
import { onAuthStateChanged } from "firebase/auth";
const Nav = () => {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLogged(!!auth.currentUser);
    });
  }, []);
  return (
    <div className={styles.nav}>
      <ChangeLanguage />
      <Navigation />
      {!logged ? <Login /> : <Logout />}
    </div>
  );
};

export default Nav;
