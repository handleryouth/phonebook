import { screen } from "@testing-library/react";
import { render } from "../TestUtils";
import Pagination from "./Pagination";

render(<Pagination handlePageChange={() => {}} page={1} totalRecords={50} />);

describe("Pagination", () => {
  it("should render the pagination", () => {
    const testing = screen.getByLabelText("pagination");
    expect(testing).toBeInTheDocument();
  });
});
