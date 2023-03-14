import { useEffect, useState } from "react";
import { decodeToken } from "react-jwt";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../utils/constants/routes";

export const useSubscribed = () => {
  const [subscribed, setSubscribed] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const payload = decodeToken(token);
    if (!payload || !token) return navigate(LOGIN);
    if (!payload.subscription) setSubscribed(false);
  }, []);
  return { subscribed };
};
