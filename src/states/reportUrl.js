import { create } from "zustand";
export const useReportUrl = create((set) => ({
  url: "",
  setUrl(url) {
    set((state) => ({ url }));
  },
}));
