import { ReactNode } from "react";
import { ThemeProvider as NativeThemeProvider } from "@emotion/react";
import { THEME } from "consts";
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.css";

interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <NativeThemeProvider theme={THEME}>{children}</NativeThemeProvider>;
}
