import { ACCESS_TOKEN, BASE_URL } from "@/lib/token"

export const fetchGroupBuyOrders = async (id: number) => {
    if (!ACCESS_TOKEN) {
    throw new Error("API_TOKEN is not defined");
  }
  const res = await fetch(
    `${BASE_URL}/group-buy-orders/?id=${id}`,
    {
      method: "GET",
      headers: {
        Authorization:
          ACCESS_TOKEN,
        "Content-Type": "application/json",
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch group buy orders");
  }

  return res.json();
};
