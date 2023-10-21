import { formatDate } from "./FormatDate";

it("should format date", () => {
  const date = "2021-01-01T00:00:00.000Z";
  const formattedDate = formatDate(date);
  expect(formattedDate).toBe("January 01, 2021");
});
