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
        </form>
      </section>

      <GradientBg opacity={15} />
    </div>
  );
};

export default LoginRegister;
