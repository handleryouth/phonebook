import Layout from "./Layout";
import { render, screen } from "../TestUtils";

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
