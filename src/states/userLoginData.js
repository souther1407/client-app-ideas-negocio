import { create } from "zustand";

const useLoginData = create((set) => ({
  userData: {
    email: "",
    uid: "",
    subscription: false,
    affiliateAccount: false,
  },
  setData(data) {
    return set((state) => ({ ...state, userData: data }));
  },
  resetData() {
    return set((state) => ({
      ...state,
      userData: {
        mail: "",
        uid: "",
        subscription: false,
        affiliateAccount: false,
      },
    }));
  },
}));

export default useLoginData;
