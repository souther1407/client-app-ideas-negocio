import { URL } from "../../config/config";

export const affiliateUser = async () => {
  const response = await fetch(URL + "/affiliates/create", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  return body;
};

export const generatePaymentLink = async () => {
  const response = await fetch(URL + "/affiliates/createPaymentLink", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  return body;
};
