import { screen } from "@testing-library/react";
import SplitButton from "./SplitButton";
import { render } from "../../TestUtils";

render(
  <SplitButton
    label="Test"
    data-testid="split-button"
    model={[{ label: "Children Menu", icon: "pi pi-check" }]}
  />
);

describe("SplitButton", () => {
  it("should render the button", () => {
    const testing = screen.getByTestId("split-button");
    expect(testing).toBeInTheDocument();
  });
});
