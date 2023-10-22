import { screen } from "@testing-library/react";
import { render } from "../TestUtils";
import Footer from "./Footer";

render(<Footer />);

describe("Footer", () => {
  it("should component correctly", () => {
    const testing = screen.getByRole("contentinfo");
    expect(testing).toBeInTheDocument();
  });
});
