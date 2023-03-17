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
  if (!response.ok) throw new Error(body.error);
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
  if (!response.ok) throw new Error(body.error);
  return body;
};

export const generateActivateLink = async () => {
  const response = await fetch(URL + "/affiliates/activate", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body;
};

export const getReferralsData = async () => {
  const response = await fetch(URL + "/affiliates/myReferrals", {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body;
};
