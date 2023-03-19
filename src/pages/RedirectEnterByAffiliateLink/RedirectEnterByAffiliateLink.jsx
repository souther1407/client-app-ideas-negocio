import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LANDING_PAGE } from "../../utils/constants/routes";
import { useStorage } from "../../hooks/useStorage";
import { addClick } from "../../services/affiliate/affiliate";
const RedirectEnterByAffiliateLink = () => {
  const { affiliateId } = useParams();
  const { save, load } = useStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const clicked = load("affiliate") ?? "";
    addClick(affiliateId, clicked);
    save("affiliate", affiliateId);
    navigate(LANDING_PAGE);
  }, []);

  return <div></div>;
};

export default RedirectEnterByAffiliateLink;
