import { URL } from "../../config/config";

export const changeVisibility = async (body) => {
  const response = await fetch(URL + "/text/changeVisibility", {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const body = await response.json();
  return body;
};
