import { URL } from "../../config/config";

export const getPrompts = async () => {
  const response = await fetch(URL + "/text/prompts", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const body = await response.json();
  return body;
};

export const getPublicPrompts = async () => {
  const response = await fetch(URL + "/text/publicPrompts", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const body = await response.json();
  return body;
};

export const getById = async (id, userId) => {
  const response = await fetch(
    URL + `/text/prompts/getById?id=${id}&user=${userId}`
  );
  if (response.status >= 400) throw new Error("Error, intente nuevamente");
  const body = await response.json();
  return body;
};
