"use client";

import Link from "next/link";

interface BreadcrumbsProps {
  status: string;        // from URL: "active" or "past"
  productId?: string;  // from URL or fetched data
}

const Breadcrumbs = ({ status, productId }: BreadcrumbsProps) => {
  // Make status readable
  const statusText = status === "active" ? "Active" : status === "past" ? "Past" : status;

  return (
    <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-4" aria-label="Breadcrumb">
      {/* Status link */}
      <Link href={`/group_buys/${status}`} className="hover:underline capitalize">
        {statusText} Group Buys
      </Link>

      {productId && (
        <>
          <span>/</span>
          <span className="font-semibold">Product Id: {productId}</span>
        </>
      )}
    </nav>
  );
};

export default Breadcrumbs;
