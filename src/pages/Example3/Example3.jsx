import React from "react";
import PlanDetail from "../PlanDetail/PlanDetail";
const DATA = {
  title: "Ejemplo 3",
  description: "Descripcion de Ejemplo",
  marketAnalisis: "Analisis de mercado de ejemplo",
  prices: "Precios de ejemplo",
  sales: "Ventas de ejemplo",
  marketingPlan: "Plan de marketing de ejemplo",
  riskAnalisis: "Análisis De mercado de ejemplo",
};

const Example3 = () => {
  return (
    <>
      <PlanDetail response={DATA} />
    </>
  );
};
export default Example3;
