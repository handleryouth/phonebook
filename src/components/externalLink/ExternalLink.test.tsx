import { render, screen } from "../TestUtils";
import ExternalLink from "./ExternalLink";

render(<ExternalLink to="#" />);

describe("External Link", () => {
  it("should render the link", () => {
    const testing = screen.getByTestId("external-link");
    expect(testing).toBeInTheDocument();
  });
});
