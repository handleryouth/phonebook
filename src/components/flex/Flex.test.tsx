import { render, screen } from "../TestUtils";
import Flex from "./Flex";

render(
  <Flex>
    <p>test</p>
  </Flex>
);

it("should render Flex correctly", () => {
  expect(screen.getByText("test")).toBeInTheDocument();
});
