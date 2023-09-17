import { URL } from "../../config/config";

export const generateReportSection = async (body) => {
  const response = await fetch(URL + "/text/createSectionDetail", {
    method: "POST",
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
