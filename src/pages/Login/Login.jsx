import React, { useState } from "react";
import Text from "../../components/styled/Text/Text";
import Button from "../../components/styled/Button/Button";
import Input from "../../components/styled/Input/Input";
import styles from "./login.module.css";
import Link from "../../components/styled/Link/Link";
import { useNavigate, useLocation } from "react-router-dom";
import { REGISTER } from "../../utils/constants/routes";
import { useLogin } from "../../hooks/useLogin";
import { useLogged } from "../../hooks/useLogged";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  useLogged();
  const { login, isLogged, logout } = useLogin({});

  const navigate = useNavigate();

  const handlerChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const handlerSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input.email, input.password);
      alert("user logged :D");
      navigate(-2, { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.login}>
      <Text>Login</Text>
      <form className={styles.loginForm} onSubmit={handlerSubmit}>
        <Input label="email" id={"email"} onChange={handlerChange} />
        <Input
          label="password"
          id={"password"}
          type="password"
          onChange={handlerChange}
        />
        <Button>
          <Text>Login</Text>
        </Button>
      </form>
      <Link to={REGISTER}>
        <Text>No tienes una cuenta? registrate</Text>
      </Link>
    </div>
  );
};

export default Login;
