// statsData.tsx
import { BsBullseye, BsPeople } from "react-icons/bs";
import { LuWallet, LuPackage } from "react-icons/lu";

export const stats_data = {
  current: [
    {
      name: "No Orders",
      value: 0,
      icon: (
        <div className="text-green-500 bg-green-500/20 p-2 rounded-md">
          <BsBullseye />
        </div>
      ),
    },
    {
      name: "Total Money",
      value: "₦0",
      icon: (
        <div className="text-blue-500 bg-blue-500/20 p-2 rounded-md">
          <LuWallet />
        </div>
      ),
    },
    {
      name: "Backers",
      value: 0,
      icon: (
        <div className="text-purple-500 bg-purple-500/20 p-2 rounded-md">
          <BsPeople />
        </div>
      ),
    },
    {
      name: "No of Products",
      value: 0,
      icon: (
        <div className="text-orange-500 bg-orange-500/20 p-2 rounded-md">
          <LuPackage />
        </div>
      ),
    },
  ],
  past: [
    {
      name: "Total Money (Past)",
      value: "₦0",
    },
  ],
};
