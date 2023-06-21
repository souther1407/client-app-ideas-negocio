import { auth } from "../firebase.js";
import { useEffect, useState } from "react";
import AuthUserData from "../services/authentication/auth.js";
import { decodeToken } from "react-jwt";
import useLoginData from "../states/userLoginData.js";
import { signOut, signInWithPopup } from "firebase/auth";
export const useLogin = ({
  onLogin = () => {},
  onLogout = () => {},
  type = "users",
}) => {
  const { setData, resetData, userData } = useLoginData((state) => state);

  useEffect(() => {
    if (localStorage.getItem("token") && !userData.email) {
      const payload = decodeToken(localStorage.getItem("token"));
      setData(payload);
    }
  }, []);
  const login = async (email, password) => {
    try {
      let response;
      if (type === "users") {
        response = await AuthUserData.login({ email, password });
      } else {
        response = await AuthUserData.expertLogin({ email, password });
      }
      localStorage.setItem("token", response.token);
      const payload = decodeToken(response.token);
      setData(payload);
      onLogin();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const loginWithProvider = async (provider, getCredentialsMethod) => {
    const credentials = await signInWithPopup(auth, provider);
    const { token } = await AuthUserData.login({
      email: credentials.user.email,
      username: credentials.user.displayName,
    });
    localStorage.setItem("token", token);
    const payload = decodeToken(token);
    setData(payload);
    return credentials;
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      resetData();
      await signOut(auth);
      onLogout();
    } catch (error) {
      alert(error.message);
    }
  };
  const isLogged = () => {
    return !!localStorage.getItem("token");
  };
  const refreshToken = async (type = "users") => {
    if (!isLogged(type)) return;
    try {
      const response = await AuthUserData.refreshToken();
      if (response.error) throw new Error(response.error);
      localStorage.setItem("token", response.token);
      const payload = decodeToken(response.token);
      setData(payload);
    } catch (error) {
      alert(error.message);
    }
  };

  return { login, loginWithProvider, logout, isLogged, refreshToken, userData };
};
