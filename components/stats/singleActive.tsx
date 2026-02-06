import { formatItemCount } from "@/utils/format_item_count";
import { BsBullseye, BsPeople } from "react-icons/bs";
import { LuPackage, LuWallet } from "react-icons/lu";
type Props = {
  stats: {
    noOrders: number;
    totalMoney: number;
    backers: number;
    noOfProducts: number;
  };
};

const singleBuyActive = ({ stats }: Props) => {
const statsData = [
  {
    name: "Orders Placed",
    value: stats.noOrders,
    icon: (
      <div className="text-green-500 bg-green-500/20 p-2 rounded-md">
        <BsBullseye />
      </div>
    ),
  },
  {
    name: "Revenue Earned",
    value: formatNaira(stats.total_price),
    icon: (
      <div className="text-blue-500 bg-blue-500/20 p-2 rounded-md">
        <LuWallet />
      </div>
    ),
  },
  {
    name: "Top Product",
    value: stats.topProduct, // This needs to be calculated from the orders
    icon: (
      <div className="text-orange-500 bg-orange-500/20 p-2 rounded-md">
        <LuPackage />
      </div>
    ),
  },
  {
    name: "Average Order Value",
    value: formatNaira(stats.avgOrderValue), // total_price / noOrders
    icon: (
      <div className="text-purple-500 bg-purple-500/20 p-2 rounded-md">
        <BsPeople />
      </div>
    ),
  },
];


  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {statsData.map((stat) => (
        <div
          key={stat.name}
          className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl"
        >
          {stat.icon}
          <div>
            <p className="text-sm text-neutral-500">{stat.name}</p>
            <p className="font-semibold">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
