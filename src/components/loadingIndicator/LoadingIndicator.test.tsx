import { render, screen } from "../TestUtils";
import LoadingIndicator from "./LoadingIndicator";

render(<LoadingIndicator size={20} />);

it("should render the loading indicator", () => {
  const testing = screen.getByRole("alert");
  expect(testing).toBeInTheDocument();
});
