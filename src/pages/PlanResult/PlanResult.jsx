import React from "react";
import PlanDetail from "../PlanDetail/PlanDetail";
import { useLogged } from "../../hooks/useLogged";
import usePromptDetail from "../../states/prompDetail";

const PlanResult = () => {
  useLogged();
  const promptDetail = usePromptDetail((state) => state.promptDetail);
  return (
    <>
      <PlanDetail response={promptDetail} />
    </>
  );
};

export default PlanResult;
