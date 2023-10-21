import { getEnvVariables } from "./GetEnvVariables";

it("should return the env variables", () => {
  process.env.REACT_APP_SERVICE_URL = "testing";
  const envVariables = getEnvVariables("serviceUrl");
  expect(envVariables).toBe("testing");
});
