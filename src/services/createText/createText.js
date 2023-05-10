import { URL } from "../../config/config";

export const createDetail = async (prompt) => {
  const response = await fetch(URL + "/text/createDetail", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(prompt),
  });
  if (!response.ok) throw new Error("Something goes wrong :c");
  const body = await response.json();
  return body;
};

export const createOptions = async (prompt) => {
  const response = await fetch(URL + "/text/createTitles", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(prompt),
  });
  if (!response.ok) throw new Error("Something goes wrong :c");
  const body = await response.json();
  return body;
};
