import { render, screen } from "../TestUtils";
import Paragraph from "./Paragraph";

render(<Paragraph>Test</Paragraph>);

it("should render the paragraph correctly", () => {
  const testing = screen.getByText("Test");
  expect(testing).toBeInTheDocument();
});
