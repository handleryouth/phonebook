import { ElementType, HTMLAttributes } from "react";
import styled from "@emotion/styled";
import { ReactNode } from "react";
import { ThemeColors } from "types";

export const HEADING_LOOKUP: Record<HeadingTagType, ElementType> = {
  heading1: "h1",
  heading2: "h2",
  heading3: "h3",
  heading4: "h4",
  heading5: "h5",
  heading6: "h6",
};

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

function CustomHeading({ tag = "heading1", children, ...props }: HeadingProps) {
  const Tag = HEADING_LOOKUP[tag];
  return <Tag {...props}>{children}</Tag>;
}

const Heading = styled(CustomHeading)`
  ${({ theme, color = "white" }) => ({
    color: theme.colors[color],
  })};
`;

export default Heading;
