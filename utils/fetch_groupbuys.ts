import { ACCESS_TOKEN, BASE_URL } from "../lib/token";

export type GroupBuyType = "ACTIVE" | "PAST";

export async function getGroupBuys(type: GroupBuyType) {
    if (!ACCESS_TOKEN) {
    throw new Error("API_TOKEN is not defined");
  }
  const res = await fetch(
    `${BASE_URL}/group-buys/?type=${type}`,
    {
      headers: {
        Authorization: ACCESS_TOKEN, // no Bearer
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch group buys");
  }

  return res.json();
}
