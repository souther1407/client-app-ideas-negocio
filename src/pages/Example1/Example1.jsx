import React from "react";
import PlanDetail from "../PlanDetail/PlanDetail";
const DATA = {
  title: "Ejemplo 1",
  description: "Descripcion de Ejemplo",
  marketAnalisis: "Analisis de mercado de ejemplo",
  prices: "Precios de ejemplo",
  sales: "Ventas de ejemplo",
  marketingPlan: "Plan de marketing de ejemplo",
  time: "Ejemplo de tiempo",
  riskAnalisis: "Análisis De mercado de ejemplo",
  input: {
    budget: 2000,
    age: 25,
    location: "Argentina",
    skills: "Programacion",
    teacher: "Elon Musk",
  },
};

const Example1 = () => {
  return (
    <>
      <PlanDetail response={DATA} />
    </>
  );
};

export default Example1;
