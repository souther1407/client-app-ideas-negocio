export const formatText = (text, renderElement) => {
  return text.split("\n\n").map((p) => renderElement(p));
};
