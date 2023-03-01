import React, { useState } from "react";
import styles from "./loginRegister.module.css";
import LandingPageNav from "../../components/compounds/LandingPageNav/LandingPageNav";
import GradientBg from "../../components/styled/GradientBg/GradientBg";
import Text from "../../components/styled/Text/Text";
import Input from "../../components/styled/Input/Input";
import Button from "../../components/styled/Button/Button";
import Icon from "../../components/styled/Icon/Icon";
import Mark from "../../components/styled/Mark/Mark";
import AuthUser from "../../services/authentication/auth";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [showRegister, setShowRegister] = useState(false);

  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const { login } = useLogin({});
  const navigate = useNavigate();

  const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      await AuthUser.registerUser(registerInput);
      alert("user created :D");
      setShowRegister(false);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleChangeLogin = (id, value) => {
    setLoginInput((prev) => ({ ...prev, [id]: value }));
  };

  const handleChangeRegister = (id, value) => {
    setRegisterInput((prev) => ({ ...prev, [id]: value }));
  };

  const handlerShowRegister = () => {
    setShowRegister(true);
  };

  const handlerShowLogin = () => {
    setShowRegister(false);
  };

  const handlerLogin = async (e) => {
    e.preventDefault();
    try {
      await login(loginInput.email, loginInput.password);
      navigate(-1);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className={styles.loginRegister}>
      <LandingPageNav />
      <section className={`${styles.login} ${showRegister && styles.hide}`}>
        <form className={styles.loginForm} onSubmit={handlerLogin}>
          <Text>Login</Text>

          <Input
            label="Email"
            type="text"
            variant="borderBottom"
            id={"email"}
            onChange={handleChangeLogin}
            icon={() => <Icon type={"mail"} />}
            onErrors={() => {}}
          />

          <Input
            label="Password"
            type="password"
            variant="borderBottom"
            id={"password"}
            onChange={handleChangeLogin}
            icon={() => <Icon type={"shield"} />}
            onErrors={() => {}}
          />
          <section className={styles.terms}>
            <input type="checkbox" />
            <Text>Remember me forget password</Text>
          </section>
          <Button w color="secondary">
            <Text>Log in</Text>
          </Button>
          <Text>
            Don't have an account{" "}
            <Mark
              style={{ cursor: "pointer" }}
              onClick={handlerShowRegister}
              color={"primary"}
            >
              Register
            </Mark>
          </Text>
        </form>
      </section>
      <section className={`${styles.register} ${showRegister && styles.show}`}>
        <form className={styles.registerForm} onSubmit={handlerRegister}>
          <Text>Register</Text>
          <Input
            label="Username"
            type="text"
            id={"username"}
            variant="borderBottom"
            onChange={handleChangeRegister}
            icon={() => <Icon type={"user"} />}
            onErrors={() => {}}
          />
          <Input
            label="Email"
            type="text"
            variant="borderBottom"
            id={"email"}
            onChange={handleChangeRegister}
            icon={() => <Icon type={"mail"} />}
            onErrors={() => {}}
          />
          <Input
            label="Password"
            type="password"
            id={"password"}
            variant="borderBottom"
            onChange={handleChangeRegister}
            icon={() => <Icon type={"shield"} />}
            onErrors={() => {}}
          />
          <section className={styles.terms}>
            <input type="checkbox" />
            <Text>I agree to terms & conditions</Text>
          </section>
          <Button w color="secondary">
            <Text>Sign up</Text>
          </Button>
          <Text>
            Already have an account{" "}
            <Mark
              style={{ cursor: "pointer" }}
              onClick={handlerShowLogin}
              color={"primary"}
            >
              Log in
            </Mark>
          </Text>
        </form>
      </section>
      <GradientBg />
    </div>
  );
};

export default LoginRegister;
