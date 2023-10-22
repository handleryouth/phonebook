import { render, screen } from "../../TestUtils";
import SplitButton from "./SplitButton";

render(
  <SplitButton
    label="Test"
    model={[{ label: "Children Menu", icon: "pi pi-check" }]}
  />
);

describe("SplitButton", () => {
  it("should render the button", () => {
    const testing = screen.getByLabelText("Test");
    expect(testing).toBeInTheDocument();
  });
});
