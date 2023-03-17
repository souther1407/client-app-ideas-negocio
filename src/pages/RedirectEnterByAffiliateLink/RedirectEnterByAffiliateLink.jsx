import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LANDING_PAGE } from "../../utils/constants/routes";
import { useStorage } from "../../hooks/useStorage";

const RedirectEnterByAffiliateLink = () => {
  const { affiliateId } = useParams();
  const { save } = useStorage();
  const navigate = useNavigate();

  useEffect(() => {
    save("affiliate", affiliateId);
    navigate(LANDING_PAGE);
  }, []);

  return <div></div>;
};

export default RedirectEnterByAffiliateLink;
