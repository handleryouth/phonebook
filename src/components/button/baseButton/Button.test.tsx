import { screen } from "@testing-library/react";
import Button from "./Button";
import { render } from "../../TestUtils";

render(<Button label="Test" />);

it("should render the button", () => {
  screen.getByText("Test");
  expect(screen.getByText("Test")).toBeInTheDocument();
});
