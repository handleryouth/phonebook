import "@emotion/react";
import { ThemeBackgroundColors, ThemeBorderColors, ThemeColors } from "./Theme";

declare module "@emotion/react" {
  export interface Theme {
    colors: Record<ThemeColors, string>;
    backgroundColors: Record<ThemeBackgroundColors, string>;
    borderColors: Record<ThemeBorderColors, string>;
  }
}
