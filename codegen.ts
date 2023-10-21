import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.REACT_APP_SERVICE_URL,
  documents: "src/graphqlCodegen/**/*.ts",
  generates: {
    "src/graphqlCodegen/build/": {
      plugins: [],
      overwrite: true,
      preset: "client",
    },
  },
};

export default config;
