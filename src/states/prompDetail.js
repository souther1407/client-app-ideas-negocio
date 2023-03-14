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
  },
  setPromptDetail(details) {
    set((state) => ({ ...state, promptDetail: details }));
  },
}));
export default usePromptDetail;
