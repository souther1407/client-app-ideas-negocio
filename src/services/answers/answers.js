import { URL } from "../../config/config";
export const createResponse = async (id, content) => {
  const response = await fetch(URL + "/answers/" + id, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ content }),
  });

  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body;
};
