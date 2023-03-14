import React from "react";
import PlanDetail from "../PlanDetail/PlanDetail";
import usePrompDetail from "../../states/prompDetail";
import { useSubscribed } from "../../hooks/useSubscribed";
import { useLogged } from "../../hooks/useLogged";
const MyPromptDetail = () => {
  useLogged();
  const { subscribed } = useSubscribed();
  const promptDetail = usePrompDetail((state) => state.promptDetail);
  return (
    <>
      <PlanDetail response={promptDetail} />
    </>
  );
};

export default MyPromptDetail;
