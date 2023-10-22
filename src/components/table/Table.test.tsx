import { render } from "../TestUtils";
import { screen } from "@testing-library/react";
import Table from "./Table";

interface TestDataProps {
  testData1: string;
  testData2: string;
}

const testData: TestDataProps[] = [
  {
    testData1: "testData1Content",
    testData2: "testData2Content",
  },
  {
    testData1: "testData3Content",
    testData2: "testData4Content",
  },
];

render(
  <Table
    columns={{
      testData1: "testData1 header",
      testData2: "testData2 header",
    }}
    data={testData}
    renderItem={(item) => ({
      testData1: item.testData1,
      testData2: item.testData2,
    })}
    keyExtractor="testData1"
  />
);

describe("Table", () => {
  it("should render table header correctly", () => {
    expect(screen.getByText("testData1 header")).toBeInTheDocument();
    expect(screen.getByText("testData2 header")).toBeInTheDocument();
  });
});
