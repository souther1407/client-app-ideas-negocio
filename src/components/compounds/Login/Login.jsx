import React from "react";
import styles from "./login.module.css";
import Link from "../../styled/Link/Link";
import Text from "../../styled/Text/Text";
import Icon from "../../styled/Icon/Icon";
const Login = () => {
  return (
    <Link to={"/login"}>
      <button className={styles.loginButton}>
        <i className={styles.loginIcon}>
          <Icon type={"user"} />
        </i>
        <Text>Login</Text>
      </button>
    </Link>
  );
};

export default Login;
