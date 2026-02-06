import { ACCESS_TOKEN, BASE_URL } from "@/lib/token";


export const fetchSingleBuyOrders = async (id: number) => {
    if (!ACCESS_TOKEN) {
    throw new Error("API_TOKEN is not defined");
  }
  const res = await fetch(
    `${BASE_URL}/single-buy-orders/?id=${id}`,
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
    throw new Error("Failed to fetch single buy orders");
  }

  return res.json();
};
