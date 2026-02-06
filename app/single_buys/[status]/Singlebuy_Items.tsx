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

const Singlebuy_Items = ({ items }: { items: any[] }) => {
  const params = useParams();
  const status = params.status as string;

  return (
    <div className="flex flex-col gap-4 border-2 border-dashed border-black/20 p-4 rounded-xl">
      {items.map((item) => (
        <Link key={item.id} href={`/single_buys/${status}/${item.id}`}>
          <div
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
                    # {item.order_id}
                  </p>
                  <Status status={item.single_buy_status} />
                </div>
                {/* quantity/unit and date created */}
                <section className="flex gap-4 items-center text-sm">
                  <div className="flex gap-2 items-center">
                    <p>Qty: {item.quantity} {item.unit_name}</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <HiOutlineCalendarDateRange />
                    <p>{formatDate(item.created_at)}</p>
                  </div>
                </section>
              </section>
            </section>

            {/* Right: Refund / Price */}
            <div className="flex gap-8 items-center flex-wrap ml-4">
              {/* refund */}
              {item.single_buy_allow_refund_withdrawal && (
                <div className="flex-1 flex gap-2 items-center text-sm text-indigo-600/80 min-w-[120px]">
                  <RiLoopRightFill />
                  <p className="font-semibold">Refund Allowed</p>
                </div>
              )}

              {/* price */}
              <div className="flex gap-4 min-w-[80px] items-center">
                <section className="flex flex-col items-end">
                  <p className="text-sm text-neutral-500">Price</p>
                  <p className="text-lg font-semibold">
                    &#8358; {formatItemCount(item.total_price)}
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

export default Singlebuy_Items;
