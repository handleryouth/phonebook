import { getWindowDimensions } from "./GetWindowDimesion";

it("should get window dimension", () => {
  window.innerWidth = 1000;
  window.innerHeight = 500;
  expect(getWindowDimensions()).toEqual({ width: 1000, height: 500 });
});
