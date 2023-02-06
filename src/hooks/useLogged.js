import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useLogged = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.currentUser) navigate("/login");
  }, []);
};
