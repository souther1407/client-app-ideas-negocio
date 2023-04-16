import { URL } from "../../config/config";

export const createMessage = async (body) => {
  const response = await fetch(`${URL}/messages`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });
  const responseBody = await response.json();
  if (!response.ok) throw new Error(responseBody.error);
  return responseBody;
};
