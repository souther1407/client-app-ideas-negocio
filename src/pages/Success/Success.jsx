import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { LANDING_PAGE } from "../../utils/constants/routes";

const Success = () => {
  const { refreshToken } = useLogin({});
  const navigate = useNavigate();
  useEffect(() => {
    refreshToken().then(() => {
      navigate(LANDING_PAGE);
    });
  }, []);
  return <div>Success redirecting</div>;
};

export default Success;
