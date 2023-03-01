export const useStorage = () => {
  const save = (name, state) => {
    const str = JSON.stringify(state);
    console.log("se guarda bien", str);
    localStorage.setItem(name, str);
  };
  const load = (name) => {
    const str = localStorage.getItem(name);
    if (!str) return str;
    return JSON.parse(str);
  };

  return { save, load };
};
