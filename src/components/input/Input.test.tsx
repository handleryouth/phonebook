import { render, screen } from "../TestUtils";
import Input from "./Input";

render(<Input label="label" name="name" />);

describe("Input", () => {
  it("should render the input", () => {
    screen.getByText("label");
    expect(screen.getByText("label")).toBeInTheDocument();
  });
});
