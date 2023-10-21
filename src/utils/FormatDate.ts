import { isDate } from "date-fns";
import format from "date-fns/format";

export function formatDate(
  date: string,
  dateFormat: string = "MMMM dd, yyyy",
  options: Parameters<typeof format>[2] = {}
) {
  let convertedDate = new Date(date);
  let dateValidation = isDate(convertedDate);

  return dateValidation ? format(convertedDate, dateFormat, options) : date;
}
