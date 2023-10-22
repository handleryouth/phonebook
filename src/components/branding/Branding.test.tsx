import { render, screen } from "../TestUtils";
import Branding from "./Branding";

render(<Branding />);

describe("Branding", () => {
  it("should render the title correctly", () => {
    const testing = screen.getByText("Contacts");
    expect(testing).toBeInTheDocument();
  });
});
