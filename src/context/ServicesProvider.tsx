import { ApolloClient, ApolloProvider,InMemoryCache } from "@apollo/client";
import { ReactNode } from "react";
import { getEnvVariables } from "utils";

const client = new ApolloClient({
  uri: getEnvVariables("serviceUrl"),
  cache: new InMemoryCache(),
  headers: {}
});

interface ServiceProviderProps {
  children: ReactNode;
}

export default function ServicesProvider({ children }: ServiceProviderProps) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
