import { URL } from "../../config/config";

export const addView = async (ids) => {
  const response = await fetch(URL + "/text/addView", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(ids),
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const responseBody = await response.json();
  return responseBody;
};
