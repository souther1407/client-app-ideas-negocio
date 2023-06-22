import React, { useRef, useState } from "react";
import styles from "./loginRegister.module.css";
import LandingPageNav from "../../components/organisms/LandingPageNav/LandingPageNav";
import GradientBg from "../../components/atoms/GradientBg/GradientBg";
import Text from "../../components/atoms/Text/Text";
import Button from "../../components/atoms/Button/Button";
import IconText from "../../components/molecules/IconText/IconText";
import { useLogin } from "../../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../../hooks/useStorage";
import { DASHBOARD_IDEAS } from "../../utils/constants/routes";
import { analytics } from "../../segment.js";
import { auth } from "../../firebase";
import {
  GoogleAuthProvider,
  TwitterAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";
const LoginRegister = () => {
  const { load, clear } = useStorage();
  const affiliateId = useRef(load("affiliate"));
  const [loading, setLoading] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  /*  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  }); */
  const { logout, loginWithProvider } = useLogin({});
  const navigate = useNavigate();

  /* const [registerInput, setRegisterInput] = useState({
    username: "",
    email: "",
    password: "",
    referredBy: affiliateId.current ?? "",
  });
 */
  /* const handlerRegister = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await AuthUser.registerUser(registerInput);
      await analytics.track("Se registro un usuario");
      alert("user created :D");

      setShowRegister(false);
      clear("affiliate");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }; */

  /*   const handleChange = (id, value) => {
    const splitedStr = id.split("-");
    const typeInput = splitedStr[0];
    const inputId = splitedStr[1];
    if (typeInput === "login") {
      setLoginInput((prev) => ({ ...prev, [inputId]: value }));
    } else {
      setRegisterInput((prev) => ({ ...prev, [inputId]: value }));
    }
  };

  const handlerShowRegister = () => {
    setShowRegister(true);
  };
 */
  /* const handlerShowLogin = () => {
    setShowRegister(false);
  };
 */
  const handlerLogin = async (provider, getCredentialsMethod) => {
    try {
      await loginWithProvider(provider, getCredentialsMethod);
      navigate(DASHBOARD_IDEAS);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginRegister}>
      <LandingPageNav />
      <section className={`${styles.login} ${showRegister && styles.hide}`}>
        <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
          <Text>Login</Text>
          <Button
            w
            onClick={() =>
              handlerLogin(
                new GoogleAuthProvider(),
                GoogleAuthProvider.credentialFromResult
              )
            }
          >
            <IconText icon={"google"}>Continue with Google</IconText>
          </Button>

          <Button
            w
            onClick={() =>
              handlerLogin(
                new TwitterAuthProvider(),
                GoogleAuthProvider.credentialFromError
              )
            }
          >
            <IconText icon={"twitter"}>Continue with Twitter</IconText>
          </Button>
          {/* <Input
            label="Email"
            type="text"
            variant="borderBottom"
            id={"login-email"}
            onChange={handleChange}
            icon={() => <Icon type={"mail"} />}
            onErrors={() => {}}
          />

          <Input
            label="Password"
            type="password"
            variant="borderBottom"
            id={"login-password"}
            onChange={handleChange}
            icon={() => <Icon type={"shield"} />}
            onErrors={() => {}}
          />
          <section className={styles.terms}>
            <input type="checkbox" />
            <Text>Remember me forget password</Text>
          </section>
          <Button w color="secondary" disabled={loading}>
            <Text>{loading ? "logging.." : "Log in"}</Text>
          </Button> */}
          {/*  <Text>
            Don't have an account{" "}
            <Mark
              style={{ cursor: "pointer" }}
              onClick={handlerShowRegister}
              color={"primary"}
            >
              Register
            </Mark>
          </Text> */}
        </form>
      </section>
      {/* <section className={`${styles.register} ${showRegister && styles.show}`}>
        <form className={styles.registerForm} onSubmit={handlerRegister}>
          <Text>Register</Text>
          <Input
            label="Username"
            type="text"
            id={"register-username"}
            variant="borderBottom"
            onChange={handleChange}
            icon={() => <Icon type={"user"} />}
            onErrors={() => {}}
          />
          <Input
            label="Email"
            type="text"
            variant="borderBottom"
            id={"register-email"}
            onChange={handleChange}
            icon={() => <Icon type={"mail"} />}
            onErrors={() => {}}
          />
          <Input
            label="Password"
            type="password"
            id={"register-password"}
            variant="borderBottom"
            onChange={handleChange}
            icon={() => <Icon type={"shield"} />}
            onErrors={() => {}}
          />
          <section className={styles.terms}>
            <input type="checkbox" />
            <Text>I agree to terms & conditions</Text>
          </section>
          <Button w color="secondary" disabled={loading}>
            <Text>{loading ? "Signing up" : "Sign up"}</Text>
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
      </section> */}
      <GradientBg />
    </div>
  );
};

export default LoginRegister;
