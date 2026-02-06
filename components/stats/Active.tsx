// import { stats_data } from "./statsData";

// const Active = () => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
//       {stats_data.current.map((stat) => (
//         <div
//           key={stat.name}
//           className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl"
//         >
//           {stat.icon}
//           <div>
//             <p className="text-sm text-neutral-500">{stat.name}</p>
//             <p className="font-semibold">{stat.value}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Active;


import { BsBullseye, BsPeople } from "react-icons/bs";
import { LuWallet, LuPackage } from "react-icons/lu";
import { formatItemCount } from "@/utils/format_item_count";

type Props = {
  stats: {
    noOrders: number;
    totalMoney: number;
    backers: number;
    noOfProducts: number;
  };
};

const Active = ({ stats }: Props) => {
  const statsData = [
    {
      name: "No Orders",
      value: stats.noOrders,
      icon: (
        <div className="text-green-500 bg-green-500/20 p-2 rounded-md">
          <BsBullseye />
        </div>
      ),
    },
    {
      name: "Total Money",
      value: `₦${formatItemCount(String(stats.totalMoney))}`,
      icon: (
        <div className="text-blue-500 bg-blue-500/20 p-2 rounded-md">
          <LuWallet />
        </div>
      ),
    },
    {
      name: "Backers",
      value: stats.backers,
      icon: (
        <div className="text-purple-500 bg-purple-500/20 p-2 rounded-md">
          <BsPeople />
        </div>
      ),
    },
    {
      name: "No of Products",
      value: stats.noOfProducts,
      icon: (
        <div className="text-orange-500 bg-orange-500/20 p-2 rounded-md">
          <LuPackage />
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

export default Active;
