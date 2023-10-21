import { CSSProperties, HTMLAttributes, ReactNode } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  flexDirection?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  flexWrap?: "wrap" | "nowrap" | "wrap-reverse";
  alignItems?: CSSProperties["alignItems"];
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: string;
  flex?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  maxHeight?: string;
  gap?: string | number;
  rowGap?: string | number;
  columnGap?: string | number;
  borderRadius?: string;
  minHeight?: string;
}

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex-grow: ${(props) => props.flexGrow || 0};
  flex-basis: ${(props) => props.flexBasis};
  flex-shrink: ${(props) => props.flexShrink || 1};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex: ${(props) => props.flex};
  align-items: ${(props) => props.alignItems || "stretch"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  max-width: ${(props) => props.maxWidth || "none"};
  min-height: ${(props) => props.minHeight || "auto"};
  border-radius: ${(props) => props.borderRadius || 0};

  ${({ gap, columnGap = "0", rowGap = "0" }) =>
    gap
      ? css({
          gap,
        })
      : css({
          columnGap,
          rowGap,
        })}
`;

export default function Flex({ children, ...item }: FlexProps) {
  return <StyledFlex {...item}>{children}</StyledFlex>;
}
