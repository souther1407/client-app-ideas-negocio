import { create } from "zustand";
import { createText } from "../services/createText/createText";

const useBusinessPlan = create((set) => ({
  creating: false,
  businessPlan: {
    title: "",
    description: "",
    marketAnalisis: "",
    prices: "",
    sales: "",
    marketingPlan: "",
    riskAnalisis: "",
  },
  error: "",
  async generateBusinessPlan(data) {
    set((state) => ({ ...state, creating: true }));
    try {
      const response = await createText(data);
      set((state) => ({
        ...state,
        error: "",
        creating: false,
        businessPlan: response,
      }));
    } catch (error) {
      set((state) => ({ ...state, creating: false, error: error.message }));
    }
  },
}));

export default useBusinessPlan;
