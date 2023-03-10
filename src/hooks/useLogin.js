import { auth } from "../firebase.js";
import { useEffect, useState } from "react";
import AuthUserData from "../services/authentication/auth.js";
import { decodeToken } from "react-jwt";
import useLoginData from "../states/userLoginData.js";

export const useLogin = ({ onLogin = () => {}, onLogout = () => {} }) => {
  const { setData, resetData, userData } = useLoginData((state) => state);
  useEffect(() => {
    if (localStorage.getItem("token") && !userData.email) {
      const payload = decodeToken(localStorage.getItem("token"));
      setData(payload);
    }
  }, []);
  const login = async (email, password) => {
    try {
      const response = await AuthUserData.login({ email, password });
      if (response.error) throw new Error(response.error);
      localStorage.setItem("token", response.token);
      const payload = decodeToken(response.token);
      setData(payload);
      onLogin();
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("token");
      resetData();
      onLogout();
    } catch (error) {
      alert(error.message);
    }
  };
  const isLogged = () => {
    return !!localStorage.getItem("token");
  };
  const refreshToken = async () => {
    if (!isLogged()) return;
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

  return { login, logout, isLogged, refreshToken, userData };
};
