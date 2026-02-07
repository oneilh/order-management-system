export const STATUS_STYLES: Record<
  string,
  { bg: string; border: string; text: string }
> = {
  PROCESSING: {
    bg: "bg-blue-100",
    border: "border-blue-400",
    text: "text-blue-700",
  },
  PACKAGING: {
    bg: "bg-indigo-100",
    border: "border-indigo-400",
    text: "text-indigo-700",
  },
  SHIPPING: {
    bg: "bg-yellow-100",
    border: "border-yellow-400",
    text: "text-yellow-700",
  },
  READY_FOR_PICKUP: {
    bg: "bg-purple-100",
    border: "border-purple-400",
    text: "text-purple-700",
  },
  DELIVERED: {
    bg: "bg-green-100",
    border: "border-green-500",
    text: "text-green-700",
  },
  FAILED_PROCESSING: {
    bg: "bg-red-100",
    border: "border-red-500",
    text: "text-red-700",
  },
  // FAILED_SHIPPING: {
  //   bg: "bg-red-100",
  //   border: "border-red-500",
  //   text: "text-red-700",
  // },
  FAILED: {
    bg: "bg-red-100",
    border: "border-red-500",
    text: "text-red-700",
  },
  REFUND_PENDING: {
    bg: "bg-orange-100",
    border: "border-orange-500",
    text: "text-orange-700",
  },
};
