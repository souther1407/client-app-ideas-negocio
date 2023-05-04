import { create } from "zustand";
import { createDetail, createOptions } from "../services/createText/createText";

const useOptions = create((set) => ({
  creating: false,
  options: [],
  error: "",
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

export default useOptions;
