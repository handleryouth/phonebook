import { useForm } from "react-hook-form";
import { render, renderHook, screen } from "../TestUtils";
import InputRHF from "./InputRHF";

const { result } = renderHook(() => useForm());

describe("InputRHF", () => {
  it("should render the input", () => {
    render(
      <InputRHF
        control={result.current.control}
        name="search"
        inputComponentProps={{
          label: "label",
        }}
      />
    );
    expect(screen.getByText("label")).toBeInTheDocument();
  });
});
