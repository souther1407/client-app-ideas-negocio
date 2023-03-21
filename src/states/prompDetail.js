import { create } from "zustand";
const usePromptDetail = create((set) => ({
  promptDetail: {
    title: "",
    description: "",
    marketAnalisis: "",
    prices: "",
    sales: "",
    marketingPlan: "",
    riskAnalisis: "",
    time: "tiempo",
    input: {
      budget: 2000,
      age: 25,
      location: "Argentina",
      skills: "Programacion",
      teacher: "Elon Musk",
    },
  },
  setPromptDetail(details) {
    set((state) => ({ ...state, promptDetail: details }));
  },
}));
export default usePromptDetail;
