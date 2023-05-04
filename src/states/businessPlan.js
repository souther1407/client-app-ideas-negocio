import { create } from "zustand";
import { createDetail, createOptions } from "../services/createText/createText";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

const useBusinessPlan = create((set) => ({
  creating: false,
  businessPlan: {
    title: "",
    description: "",
    marketAnalisis: "",
    productMin: "",
    costs: "",
    marketingPlan: "",
    team: "",
  },
  options: [],
  error: "",
  async generateBusinessPlan(body) {
    set((state) => ({ ...state, creating: true }));
    try {
      const response = await createDetail(body);
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
  async generateOptions(body) {
    set((state) => ({ ...state, creating: true }));
    try {
      const options = await createOptions(body);
      set((state) => ({
        ...state,
        error: "",
        creating: false,
        options,
      }));
    } catch (error) {
      set((state) => ({ ...state, creating: false, error: error.message }));
    }
  },
}));

export default useBusinessPlan;
