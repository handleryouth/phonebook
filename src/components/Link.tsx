import styled from "@emotion/styled";
import React, { ComponentProps } from "react";
import { Link as NativeLink } from "react-router-dom";
import { ThemeColors } from "types";

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

export interface LinkProps extends ComponentProps<typeof NativeLink> {
  color?: ThemeColors;
}

export default function Link(item: LinkProps) {
  return <StyledLink {...item} />;
}
