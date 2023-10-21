import { ReactNode } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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
