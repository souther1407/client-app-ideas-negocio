import React from "react";
import styles from "./needLoginOrPayWindow.module.css";
import Container from "../../styled/Container/Container";
import Button from "../../styled/Button/Button";
import Text from "../../styled/Text/Text";
import Link from "../../styled/Link/Link";
import { SUBSCRIBE, LOGIN } from "../../../utils/constants/routes";
import { useLogin } from "../../../hooks/useLogin";
const NeedLoginOrPayWindow = () => {
  const { userData, isLogged } = useLogin({});
  return (
    <div className={styles.needLoginOrPay}>
      <Container>
        <Text>Programador, 20 años, presupuesto de $1000...</Text>
      </Container>
      <Container>
        {!isLogged() && (
          <Link to={LOGIN}>
            <Button color="secondary">
              <Text>Login/Register</Text>
            </Button>
          </Link>
        )}
        <Link to={SUBSCRIBE}>
          <Text>Checkout</Text>
        </Link>
      </Container>
    </div>
  );
};

export default NeedLoginOrPayWindow;
