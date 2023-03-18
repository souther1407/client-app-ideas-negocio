export const useStorage = () => {
  const save = (name, state) => {
    if (typeof state === "object") {
      state = JSON.stringify(state);
    }
    localStorage.setItem(name, state);
  };
  const load = (name) => {
    const str = localStorage.getItem(name);
    if (!str) return str;
    try {
      return JSON.parse(str);
    } catch (error) {
      return str;
    }
  };

  const clear = (name) => {
    localStorage.removeItem(name);
  };

  return { save, load, clear };
};
