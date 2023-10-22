import LoadingIndicator from "./LoadingIndicator";
import { render, screen } from "../TestUtils";

render(<LoadingIndicator size={20} />);

it("should render the loading indicator", () => {
  const testing = screen.getByRole("alert");
  expect(testing).toBeInTheDocument();
});
