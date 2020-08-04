export function calculateTimeInterval(endDate, startDate) {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
}
