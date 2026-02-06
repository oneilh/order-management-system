import Breadcrumbs from "@/components/Breadcrumbs";
import ProductDetails from "./ProductDetails";
import ProductStats from "./ProductStats";
import BuyersList from "./BuyersList";
import { fetchGroupBuyOrders } from "@/utils/fetchGroupBuyOrders";
import BuyerTable from "./BuyerTable";
import { notFound } from "next/navigation";
type Props = {
  params: {
    status: "active" | "past";
    groupId: string;
  };
};

const page = async ({ params }: Props) => {
  const { status, groupId } = await params;
  const orders = await fetchGroupBuyOrders(Number(groupId));

  if (!orders || !orders.results || orders.results.length === 0) {
    notFound();
  }
  return (
    <div className="flex flex-col gap-8">
      <Breadcrumbs status={status} productId={groupId} />
      {/* <section className="w-full flex gap-8 border border-black/20 p-8 rounded-2xl flex-wrap">
        <ProductDetails />
        <ProductStats />
      </section> */}
      <BuyersList>
        <BuyerTable dataRows={orders.results} />
      </BuyersList>
    </div>
  );
};

export default page;
