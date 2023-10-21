import { screen } from "@testing-library/react";
import { render } from "../TestUtils";
import Branding from "./Branding";

render(<Branding />);

describe("Branding", () => {
  it("should render the title correctly", () => {
    const testing = screen.getByText("Contacts");
    expect(testing).toBeInTheDocument();
  });
});
