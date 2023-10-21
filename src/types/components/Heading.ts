import { HTMLAttributes, ReactNode } from "react";
import { ThemeColors } from "../Theme";

export type HeadingTagType =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "heading5"
  | "heading6";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  tag?: HeadingTagType;
  color?: ThemeColors;
  children: ReactNode;
}
