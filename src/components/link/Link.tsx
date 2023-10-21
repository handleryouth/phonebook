import styled from "@emotion/styled";
import { Link as NativeLink } from "react-router-dom";
import { LinkProps, ThemeColors } from "types";

interface StyledLinkProps {
  color?: ThemeColors;
}

const StyledLink = styled(NativeLink)<StyledLinkProps>`
  color: ${({ theme, color = "white" }) => theme.colors[color]};

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Link(item: LinkProps) {
  return <StyledLink {...item} />;
}
