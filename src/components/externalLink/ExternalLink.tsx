import styled from "@emotion/styled";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ExternalLinkProps } from "types";

import { Link } from "../link";

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
    <StyledLink data-testid="external-link" {...item}>
      {children}
      <Icon />
    </StyledLink>
  );
}
