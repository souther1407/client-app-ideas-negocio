import { create } from "zustand";

const useVerticalNavigation = create((set) => ({
  currentSection: "ideas",
  setCurrentSetion(newSection) {
    set((state) => ({ ...state, currentSection: newSection }));
  },
}));

export default useVerticalNavigation;
