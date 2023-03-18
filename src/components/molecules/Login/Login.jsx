import React, { useEffect, useState } from "react";
import styles from "./login.module.css";

import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";
import { auth } from "../../../firebase.js";
import { useNavigate } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { LOGIN } from "../../../utils/constants/routes";
const Login = () => {
  const navigate = useNavigate();

  const [logged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setLogged(!!auth.currentUser);
    });
  }, []);

  const handleClick = async (e) => {
    if (!auth.currentUser) return navigate(LOGIN);
    else return await signOut(auth);
  };
  return (
    <button className={styles.loginButton} onClick={handleClick}>
      <i className={styles.loginIcon}>
        <Icon type={"user"} />
      </i>
      <Text>{logged ? "logout" : "login"}</Text>
    </button>
  );
};

export default Login;
