import React from "react";
import styles from "./needLoginOrPayWindow.module.css";
import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Link from "../../atoms/Link/Link";
import { SUBSCRIBE, LOGIN } from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
const NeedLoginOrPayWindow = () => {
  const { userData, isLogged } = useLogin({});
  const navigate = useNavigate();
  return (
    <div className={styles.needLoginOrPay}>
      <div className={styles.buttons}>
        {!isLogged() && (
          <button className={styles.btn} onClick={() => navigate(LOGIN)}>
            <Text>Log in / Sign Up</Text>
          </button>
        )}
      </div>
    </div>
  );
};

export default NeedLoginOrPayWindow;
