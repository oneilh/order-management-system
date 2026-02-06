export const calculateActiveStats = (groupBuys: any[]) => {
  const noOrders = groupBuys.length;

  const totalMoney = groupBuys.reduce(
    (sum, item) => sum + Number(item.total_amount_collected),
    0
  );

  const backers = groupBuys.reduce(
    (sum, item) => sum + Number(item.group_buy_order_units_quantity),
    0
  );

  const noOfProducts = new Set(
    groupBuys.map((item) => item.product.id)
  ).size;

  return {
    noOrders,
    totalMoney,
    backers,
    noOfProducts,
  };
};
