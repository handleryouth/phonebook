import { screen } from "@testing-library/react";
import Link from "./Link";
import "@testing-library/jest-dom";
import { render } from "../TestUtils";

render(<Link to="#">test</Link>);

describe("Link", () => {
  it("should render the link correctly", () => {
    const testing = screen.getByText("test");
    expect(testing).toBeInTheDocument();
  });
});
