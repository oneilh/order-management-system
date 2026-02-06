import BuyersList from "@/app/group_buys/[status]/[groupId]/BuyersList";
import BuyerTable from "@/app/group_buys/[status]/[groupId]/BuyerTable";
import Breadcrumbs from "@/components/Breadcrumbs";

import { fetchGroupBuyOrders } from "@/utils/fetchGroupBuyOrders";
import { fetchSingleBuyOrders } from "@/utils/fetchSingleBuyOrders";

import { notFound } from "next/navigation";
type Props = {
  params: {
    status: "active" | "past";
    groupId: string;
  };
};

const page = async ({ params }: Props) => {
  const { status, groupId } = await params;
  const orders = await fetchSingleBuyOrders(Number(groupId));
  console.log(orders)

  if (!orders || !orders.results || orders.results.length === 0) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs status={status} productId={groupId} />

      {/* <BuyersList>
        <BuyerTable dataRows={orders.results} />
      </BuyersList> */}
    </div>
  );
};

export default page;
