import { render } from "../TestUtils";
import { screen } from "@testing-library/react";
import Paragraph from "./Paragraph";

render(<Paragraph>Test</Paragraph>);

it("should render the paragraph correctly", () => {
  const testing = screen.getByText("Test");
  expect(testing).toBeInTheDocument();
});
