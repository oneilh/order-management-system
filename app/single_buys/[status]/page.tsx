import Completed from "@/components/stats/Completed";
import Active from "@/components/stats/Active";
import ToggleBtn from "@/components/ToggleBtn";

import { getSingleBuys } from "@/utils/fetch_singlebuys";
import { calculateActiveStats } from "@/utils/groupbuy_stats";
import { notFound } from "next/navigation";
import Groupbuy_Items from "@/app/group_buys/[status]/Groupbuy_Items";
import Singlebuy_Items from "./Singlebuy_Items";

type Props = {
  params: {
    status: "active" | "completed";
  };
};

const page = async ({ params }: Props) => {
  const { status } = await params;

  const validStatuses = ["active", "completed"];
  if (!validStatuses.includes(status)) {
    notFound();
  }

  const groupBuys =
    status === "active"
      ? await getSingleBuys("ACTIVE")
      : await getSingleBuys("PAST");

  console.log(groupBuys);
  const activeStats =
    status.toLowerCase() === "active"
      ? calculateActiveStats(groupBuys.results)
      : null;
  console.log(activeStats);
  return (
    <section className="flex flex-col gap-8">
      <ToggleBtn status="single_buys" />

      {status === "active" && activeStats && (
        <>
          {/* <Active stats={activeStats} /> */}
          <Singlebuy_Items items={groupBuys.results} />
        </>
      )}

      {status === "completed" && (
        <>
          <Completed />
          <Singlebuy_Items items={groupBuys.results} />
        </>
      )}
    </section>
  );
};

export default page;
