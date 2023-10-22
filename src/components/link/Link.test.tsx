import { render, screen } from "../TestUtils";
import Link from "./Link";

render(<Link to="#">test</Link>);

describe("Link", () => {
  it("should render the link correctly", () => {
    const testing = screen.getByText("test");
    expect(testing).toBeInTheDocument();
  });
});
