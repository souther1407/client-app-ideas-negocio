export const parserResponse = (response) => {
  return response
    .split(/\d\./g)
    .filter((text) => text.length > 4)
    .map((text, i) => `${i + 1}.${text}`);
};
