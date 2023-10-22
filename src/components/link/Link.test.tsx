import Link from "./Link";
import { render, screen } from "../TestUtils";

render(<Link to="#">test</Link>);

describe("Link", () => {
  it("should render the link correctly", () => {
    const testing = screen.getByText("test");
    expect(testing).toBeInTheDocument();
  });
});
