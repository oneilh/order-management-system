// statuses.ts
export const ORDER_STATUSES = [
  "PROCESSING",
  "SHIPPING",
  "PACKAGING",
  "READY_FOR_PICKUP",
  "DELIVERED",
  "FAILED_PROCESSING",
  "FAILED_SHIPPING",
  "REFUND_PENDING", // Added a clear refund status
] 
export type OrderStatus = (typeof ORDER_STATUSES)[number];
