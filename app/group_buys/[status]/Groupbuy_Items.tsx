'use client'
import Link from "next/link";
import { useParams } from "next/navigation";

import { RiLoopRightFill } from "react-icons/ri";
import { GoClock } from "react-icons/go";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { MdNavigateNext } from "react-icons/md";
import { formatItemCount } from "@/utils/format_item_count";
import Avatar from "@/components/Avatar";
import Status from "@/components/Status";
import { formatDate } from "@/utils/format_date";
import StatusBadge from "@/components/StatusBadge";

const Groupbuy_Items = ({ items }: { items: any[] }) => {
  const params = useParams();
  const status = params.status as string;

  return (
    <div className="flex flex-col gap-4 border-2 border-dashed border-black/20 p-4 rounded-xl">
      {items.map((item) => (
        <Link key={item.id} href={`/group_buys/${status}/${item.id}`}>
          <div
            key={item.id}
            className="flex justify-between flex-wrap p-4 border border-black/20 rounded-xl cursor-pointer hover:bg-gray-100 transition"
          >
            {/* Left: Image + Description */}
            <section className="flex gap-4 items-center flex-1 min-w-[220px]">
              {/* image */}
              <Avatar src={item.product.image} size="small"/>

              {/* desc */}
              <section className="flex flex-col gap-2 flex-1">
                <div className="flex gap-4 items-center flex-wrap">
                  <p className="font-semibold">{item.product.name}</p>
                  <p className="text-sm text-neutral-500 bg-gray-100 w-fit px-1 py-0.5 rounded-sm">
                    # {item.id}
                  </p>
                  {/* <Status status={item.group_buy_status} /> */}
                  <StatusBadge status={item.group_buy_status} />
                </div>
                {/* duration and date created */}
                <section className="flex gap-4 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <GoClock />
                    <p>{item.group_buy_duration} left</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiOutlineCalendarDateRange />
                    <p>{formatDate(item.created_at)}</p>
                  </div>
                </section>
              </section>
            </section>

            {/* Right: Refund / Progress / Price */}
            <div className="flex gap-8 items-center flex-wrap ml-4">
              {/* refund */}
              {item.status_display_text && (
                <div className="flex-1 flex gap-2 items-center text-sm text-indigo-600/80 min-w-[120px]">
                  <RiLoopRightFill />
                  <p className="font-semibold">
                    {item.status_display_text.slice(1, -1)}
                  </p>
                </div>
              )}

              {/* progress */}
              <section className="flex-1 flex flex-col gap-2 min-w-[180px]">
                <div className="flex justify-between text-sm text-neutral-500">
                  <p>{formatItemCount(item.group_buy_percentage)}% Complete</p>
                  <p>
                    {formatItemCount(item.group_buy_order_units_quantity)}/
                    {formatItemCount(item.group_buy_unit_goal)}
                  </p>
                </div>
                <progress
                  className="progress progress-neutral w-full"
                  value={formatItemCount(item.group_buy_percentage)}
                  max="100"
                ></progress>
              </section>

              {/* price */}
              <div className="flex gap-4 min-w-[80px] items-center">
                <section className="flex flex-col items-end">
                  <p className="text-sm text-neutral-500">Price</p>
                  <p className="text-lg font-semibold">
                    &#8358; {formatItemCount(item.total_amount_collected)}
                  </p>
                </section>
                <MdNavigateNext className="text-2xl text-neutral-500" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Groupbuy_Items;
