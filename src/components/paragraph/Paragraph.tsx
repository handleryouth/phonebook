import { ComponentProps } from "react";
import styled from "@emotion/styled";
import { ThemeColors } from "types";

export interface ParagraphProps extends ComponentProps<"p"> {
  color?: ThemeColors;
}

interface StyledParagraphProps {
  color?: ThemeColors;
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  color: ${({ theme, color = "white" }) => theme.colors[color]};
`;

export default function Paragraph(item: ParagraphProps) {
  return <StyledParagraph {...item} />;
}
