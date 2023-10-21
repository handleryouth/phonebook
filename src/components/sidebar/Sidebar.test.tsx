import Sidebar from "./Sidebar";
import { render } from "../TestUtils";
import { screen } from "@testing-library/react";

render(<Sidebar toggleCloseSidebar={() => null} visible />);

describe("Sidebar", () => {
  it("should render the sidebar", () => {
    const testing = screen.getByRole("complementary");
    expect(testing).toBeInTheDocument();
  });
});
