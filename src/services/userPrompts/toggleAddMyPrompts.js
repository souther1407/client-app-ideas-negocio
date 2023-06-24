import { URL } from "../../config/config";

export const toggleAddMyPrompts = async (ids) => {
  const response = await fetch(`${URL}/text/toggleFavourites`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(ids),
  });
  if (!response.ok) throw new Error("Error, try later");
  const body = await response.json();
  return body;
};
