import { URL } from "../../config/config";

export const setPaymentMethods = async (paymentMethod) => {
  const response = await fetch(`${URL}/paymentMethods`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ paymentMethod }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body;
};

export const getPaymentMethods = async () => {
  const response = await fetch(`${URL}/paymentMethods`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body;
};

export const deletePaymentMethod = async (id) => {
  const response = await fetch(`${URL}/paymentMethods`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify({ id }),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error);
  return body;
};
