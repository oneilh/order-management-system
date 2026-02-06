import { ACCESS_TOKEN, BASE_URL } from "../lib/token";

export type SingleBuyType = "ACTIVE" | "PAST";

export async function getSingleBuys(type: SingleBuyType) {
    if (!ACCESS_TOKEN) {
    throw new Error("API_TOKEN is not defined");
  }
  const res = await fetch(
    `${BASE_URL}/single-buys/?type=${type}`,
    {
      headers: {
        // As per your example, no "Bearer" prefix is used
        Authorization: ACCESS_TOKEN, 
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || "Failed to fetch single buys");
  }

  return res.json();
}