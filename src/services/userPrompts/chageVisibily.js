import { URL } from "../../config/config";

export const changeVisibility = async (body) => {
  const response = await fetch(URL + "/text/changeVisibility", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const responseBody = await response.json();
  return responseBody;
};
