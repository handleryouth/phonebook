import { render, screen } from "../../TestUtils";
import Button from "./Button";

render(<Button label="Test" />);

it("should render the button", () => {
  screen.getByText("Test");
  expect(screen.getByText("Test")).toBeInTheDocument();
});
