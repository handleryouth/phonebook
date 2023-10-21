import { screen } from "@testing-library/react";
import { render } from "../TestUtils";
import Navbar from "./Navbar";

render(<Navbar />);

describe("Navbar", () => {
  const testing = screen.getByRole("navigation");
  it("should render the navbar", () => {
    expect(testing).toBeInTheDocument();
  });

  it("should render navbar links", () => {
    expect(testing).toHaveTextContent("Home");
    expect(testing).toHaveTextContent("Create Contact");
    expect(testing).toHaveTextContent("Contact List");
  });
});
