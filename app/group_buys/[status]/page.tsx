import Completed from "@/components/stats/Completed";
import Active from "@/components/stats/Active";
import ToggleBtn from "@/components/ToggleBtn";
import Groupbuy_Items from "./Groupbuy_Items";
import { getGroupBuys } from "@/utils/fetch_groupbuys";
import { calculateActiveStats } from "@/utils/groupbuy_stats";
import { notFound } from "next/navigation";
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
      ? await getGroupBuys("ACTIVE")
      : await getGroupBuys("PAST");

 
  const activeStats =
    status.toLowerCase() === "active"
      ? calculateActiveStats(groupBuys.results)
      : null;
  
  return (
    <section className="flex flex-col gap-8">
      <ToggleBtn />

      {status === "active" && activeStats && (
        <>
          <Active stats={activeStats} />
          <Groupbuy_Items items={groupBuys.results} />
        </>
      )}

      {status === "completed" && (
        <>
          <Completed />
          <Groupbuy_Items items={groupBuys.results} />
        </>
      )}
    </section>
  );
};

export default page;
