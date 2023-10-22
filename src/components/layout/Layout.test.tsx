import { render, screen } from "../TestUtils";
import Layout from "./Layout";

render(
  <Layout>
    <p>test</p>
  </Layout>
);

describe("TestUtils", () => {
  it("should render layout correctly", () => {
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
