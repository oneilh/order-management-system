"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";

export default function ToggleBtn({
  status = "group_buys",
}: {
  status?: string;
}) {
  const pathname = usePathname();

  const isActive = pathname.includes("/active");
  const isCompleted = pathname.includes("/completed");

  return (
    <div className="w-fit inline-flex rounded-xl bg-gray-100 p-1">
      {/* Active */}
      <Link
        href={`/${status}/active`}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition
          ${isActive ? "bg-black text-white shadow" : "text-gray-500"}`}
      >
        <HiOutlineClock />
        Active
      </Link>

      {/* Completed */}
      <Link
        href={`/${status}/completed`}
        className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition
          ${isCompleted ? "bg-black text-white shadow" : "text-gray-500"}`}
      >
        <HiOutlineCheckCircle />
        Completed
      </Link>
    </div>
  );
}
