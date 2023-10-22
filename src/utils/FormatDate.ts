import { isDate } from "date-fns";
import format from "date-fns/format";

export function formatDate(
  date: string,
  dateFormat: string = "MMMM dd, yyyy",
  options: Parameters<typeof format>[2] = {}
) {
  const convertedDate = new Date(date);
  const dateValidation = isDate(convertedDate);

  return dateValidation ? format(convertedDate, dateFormat, options) : date;
}
