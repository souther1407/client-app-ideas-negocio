export const parseDay = (dayNumber) => {
  switch (dayNumber) {
    case 0:
      return "dom";
    case 1:
      return "lun";
    case 2:
      return "mar";
    case 3:
      return "mie";
    case 4:
      return "jue";
    case 5:
      return "vie";
    case 6:
      return "sab";
    default:
      return "";
  }
};
