export const formatStringToShort = (string, limit = 20) => {
  if (string.length > limit) return `${string.substring(0, limit)}...`;
  else return string;
};
