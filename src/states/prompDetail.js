import { create } from "zustand";
const usePromptDetail = create((set) => ({
  promptDetail: {
    title: "",
    description: "",
    marketAnalisis: "",
    productMin: "",
    costs: "",
    marketingPlan: "",
    team: "",
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
