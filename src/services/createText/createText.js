import { URL } from "../../config/config";
export const createText = async (prompt) => {
  const response = await fetch(URL + "/text/create", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ prompt: prompt }),
  });
  const body = await response.json();
  return body;
};
