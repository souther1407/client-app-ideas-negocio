import React from "react";
import PlanDetail from "../PlanDetail/PlanDetail";
import { useLogged } from "../../hooks/useLogged";
import useBusinessPlan from "../../states/businessPlan";

const PlanResult = () => {
  useLogged();
  const planDetail = useBusinessPlan((state) => state.businessPlan);
  return (
    <>
      <PlanDetail response={planDetail} />
    </>
  );
};

export default PlanResult;
