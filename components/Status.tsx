import React from "react";
import { MdError, MdAutorenew, MdCheckCircle } from "react-icons/md";

interface StatusBadgeProps {
  status: string;
}

const Status = ({ status }: StatusBadgeProps) => {
  // Determine color and icon based on status
  let colorClasses = "";
  let Icon: React.ElementType | null = null;

  switch (status.toLowerCase()) {
    case "failed":
      colorClasses = "text-red-500 bg-red-500/10";
      Icon = MdError;
      break;
    case "processing":
      colorClasses = "text-yellow-600 bg-yellow-200/20";
      Icon = MdAutorenew;
      break;
    case "completed":
      colorClasses = "text-green-600 bg-green-500/10";
      Icon = MdCheckCircle;
      break;
    default:
      colorClasses = "text-gray-500 bg-gray-200/20";
      Icon = null;
  }

  return (
    <div className={`flex items-center gap-2 border rounded-2xl px-4 w-fit text-sm ${colorClasses}`}>
      {Icon && <Icon />}
      <span>{status}</span>
    </div>
  );
};

export default Status;
