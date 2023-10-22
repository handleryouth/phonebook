import { render, screen } from "../TestUtils";
import Heading from "./Heading";

render(<Heading tag="heading1">Test</Heading>);

it("should render the heading", () => {
  const testing = screen.getByText("Test");
  expect(testing).toBeInTheDocument();
});
