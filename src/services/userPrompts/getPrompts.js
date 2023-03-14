import { URL } from "../../config/config";

export const getPrompts = async () => {
  const response = await fetch(URL + "/text/prompts", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  return body;
};
