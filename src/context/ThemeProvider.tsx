import { ThemeProvider as NativeThemeProvider, Theme } from "@emotion/react";
import { ReactNode } from "react";
import "primereact/resources/themes/viva-dark/theme.css";
import "primereact/resources/primereact.css";

const THEME: Theme = {
  colors: {
    white: "#ffffff",
    black: "#000000",
  },
  backgroundColors: {
    white: "#ffffff",
    black: "#000000",
    blue: "#3B82F6",
  },
  borderColors: {
    gray: "#cccccc",
    white: "#ffffff",
  },
};

export interface ThemeProviderProps {
  children: ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <NativeThemeProvider theme={THEME}>{children}</NativeThemeProvider>;
}
