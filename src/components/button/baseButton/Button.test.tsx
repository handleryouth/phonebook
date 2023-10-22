import Button from "./Button";
import { render, screen } from "../../TestUtils";

render(<Button label="Test" />);

it("should render the button", () => {
  screen.getByText("Test");
  expect(screen.getByText("Test")).toBeInTheDocument();
});
