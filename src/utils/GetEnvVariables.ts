type GetEnvVariablesType = "serviceUrl";

const ENV_LOOKUP: Record<GetEnvVariablesType, string> = {
  serviceUrl: "REACT_APP_SERVICE_URL",
};

export function getEnvVariables(type: GetEnvVariablesType) {
  return process.env[ENV_LOOKUP[type]];
}
