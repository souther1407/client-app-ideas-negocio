import { URL } from "../../config/config";

export const createSubscription = async (data) => {
  const response = await fetch(URL + "/subscriptions/createSubscriptions", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  console.log(body);
  return body;
};
