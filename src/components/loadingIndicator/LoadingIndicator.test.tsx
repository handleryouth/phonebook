import LoadingIndicator from "./LoadingIndicator";
import { render } from "../TestUtils";
import { screen } from "@testing-library/react";

render(<LoadingIndicator size={20} />);

it("should render the loading indicator", () => {
  const testing = screen.getByRole("alert");
  expect(testing).toBeInTheDocument();
});
