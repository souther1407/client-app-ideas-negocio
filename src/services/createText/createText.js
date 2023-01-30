import { URL } from "../../config/config";
export const createText = async (prompt) => {
  console.log("antes del fetch", prompt);
  const response = await fetch(URL + "/text/create", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ prompt: prompt }),
  });
  const body = await response.json();
  console.log(body);
  return body.choices[0].text;
};
