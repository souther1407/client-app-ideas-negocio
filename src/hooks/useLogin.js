import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithCustomToken,
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useEffect, useState } from "react";
import AuthUserData from "../services/authentication/auth.js";

export const useLogin = ({ onLogin = () => {}, onLogout = () => {} }) => {
  const [credentials, setCredentials] = useState(null);
  const [lastSubscription, setLastSubscription] = useState([]);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const data = await AuthUserData.getUserData(user.uid);
        setLastSubscription(data);
      } else {
        setLastSubscription([]);
      }
      setCredentials(user);
    });
  }, []);

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

  return { login, credentials, logout, lastSubscription };
};
