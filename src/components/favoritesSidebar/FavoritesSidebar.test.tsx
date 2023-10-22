import { render, screen } from "../TestUtils";
import FavoritesSidebar from "./FavoritesSidebar";

render(<FavoritesSidebar toggleCloseSidebar={() => {}} visible />);

it("should render FavoritesSidebar correctly", () => {
  expect(screen.getByText("Favorites")).toBeInTheDocument();
});
