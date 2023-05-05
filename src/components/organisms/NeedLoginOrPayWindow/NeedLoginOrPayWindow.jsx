import React from "react";
import styles from "./needLoginOrPayWindow.module.css";
import Container from "../../atoms/Container/Container";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";

import Link from "../../atoms/Link/Link";
import { SUBSCRIBE, LOGIN } from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useSubscribed } from "../../../hooks/useSubscribed";
const NeedLoginOrPayWindow = ({ onClose }) => {
  const { userData, isLogged } = useLogin({});
  const { subscribed } = useSubscribed();
  const navigate = useNavigate();
  return (
    <div className={styles.needLoginOrPay}>
      <button className={styles.closeBtn} onClick={onClose}>
        X
      </button>
      <div className={styles.buttons}>
        <Text>Necesitas una subscripción :c</Text>
        {!isLogged() && (
          <button className={styles.btn} onClick={() => navigate(LOGIN)}>
            <Text>Log in / Sign Up</Text>
          </button>
        )}
        {!subscribed && (
          <button className={styles.btn} onClick={() => navigate(SUBSCRIBE)}>
            Subscribe
          </button>
        )}
      </div>
    </div>
  );
};

export default NeedLoginOrPayWindow;
