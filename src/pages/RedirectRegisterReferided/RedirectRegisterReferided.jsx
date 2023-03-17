import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "../../hooks/useQuery";
import { useStorage } from "../../hooks/useStorage";
import { LOGIN } from "../../utils/constants/routes";
const RedirectRegisterReferided = () => {
  const { affiliate } = useQuery();
  const { save } = useStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if (affiliate) {
      save("affiliateId", affiliate);
      navigate(LOGIN);
    }
  }, [affiliate]);

  return <div></div>;
};

export default RedirectRegisterReferided;
