import { URL } from "../../config/config";

export const createSubscription = async (data) => {
  const response = await fetch(URL + "/subscriptions/postSubscription", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await response.json();
  console.log(body);
  return body;
};
