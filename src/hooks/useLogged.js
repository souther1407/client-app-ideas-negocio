import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { decodeToken } from "react-jwt";
import {
  LOGIN,
  EXPERT_LOGIN,
  EXPERT_DASHBOARD,
  DASHBOARD_IDEAS,
} from "../utils/constants/routes.js";
export const useLogged = (type = "users") => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = decodeToken(localStorage.getItem("token"));
    if (type == "users" && !token) navigate(LOGIN);
    else if (type == "experts" && !token) navigate(EXPERT_LOGIN);
    else if (type == "experts" && token.role !== "expert")
      navigate(DASHBOARD_IDEAS);
    else if (type == "users" && token.role === "expert")
      navigate(EXPERT_DASHBOARD);
  }, []);
};
