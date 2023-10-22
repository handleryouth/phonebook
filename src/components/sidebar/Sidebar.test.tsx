import { screen } from "@testing-library/react";

import { render } from "../TestUtils";
import Sidebar from "./Sidebar";

render(<Sidebar toggleCloseSidebar={() => null} visible />);

describe("Sidebar", () => {
  it("should render the sidebar", () => {
    const testing = screen.getByRole("complementary");
    expect(testing).toBeInTheDocument();
  });
});
