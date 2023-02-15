import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useState } from "react";

export const useLogin = ({ onLogin = () => {}, onLogout = () => {} }) => {
  const [credentials, setCredentials] = useState(null);
  onAuthStateChanged(auth, (user) => {
    setCredentials(user);
  });

  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch (error) {
      alert(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      onLogout();
    } catch (error) {
      alert(error.message);
    }
  };

  return { login, credentials, logout };
};
