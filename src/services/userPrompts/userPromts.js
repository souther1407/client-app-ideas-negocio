import { URL } from "../../config/config";

export const addView = async (body) => {
  const response = await fetch(URL + "/text/setNewView", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const responseBody = await response.json();
  return responseBody;
};

export const addShare = async (body) => {
  const response = await fetch(URL + "/text/addShare", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error("Error, intente nuevamente");
  const responseBody = await response.json();
  return responseBody;
};
