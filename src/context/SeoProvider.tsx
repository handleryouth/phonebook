import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";

interface SeoProviderProps {
  children: ReactNode;
}

export default function SeoProvider({ children }: SeoProviderProps) {
  return <HelmetProvider>{children}</HelmetProvider>;
}
