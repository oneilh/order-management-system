export function formatDate(isoString: string): string {
  const date = new Date(isoString);

  // Helper to get ordinal (1st, 2nd, 3rd, 4th, etc.)
  const getOrdinal = (n: number) => {
    if (n > 3 && n < 21) return "th"; // 4-20 is always "th"
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  const day = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthNames[date.getMonth()];
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}${getOrdinal(day)} ${month}, ${hours}:${minutes}`;
}
