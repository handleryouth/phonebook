import styled from "@emotion/styled";
import Link, { LinkProps } from "./Link";
import { IconType } from "react-icons";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ExternalLinkProps extends LinkProps {
  Icon?: IconType;
}

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  column-gap: 5px;
`;

export default function ExternalLink({
  Icon = FaExternalLinkAlt,
  children,
  ...item
}: ExternalLinkProps) {
  return (
    <StyledLink {...item}>
      {children}
      <Icon />
    </StyledLink>
  );
}
