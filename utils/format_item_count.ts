export function formatItemCount(apiValue:string) {
  const num = Number(apiValue); // convert string to number
  return Math.floor(num);        // floor to whole number
}