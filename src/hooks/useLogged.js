import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useLogged = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log(auth.currentUser);
    if (!auth.currentUser) return navigate("/login");
  }, []);
};
