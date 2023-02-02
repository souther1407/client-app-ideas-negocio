import i18n from "../../i18n";
export const parseData = (data) => {
  console.log(i18n.language);
  if (i18n.language == "en") {
    return `Tell me business idea in 5 steps for someone that knows 
    ${data.habilidad}, lives in ${data.ubicacion} and is ${data.edad} years old`;
  } else {
    return `Dame una idea de negocio en 5 pasos para alguien que sabe 
    ${data.habilidad}, vive en ${data.ubicacion} y tiene ${data.edad} años`;
  }
};
