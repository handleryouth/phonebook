import styled from "@emotion/styled";
import { HEADING_LOOKUP } from "consts";
import { HeadingProps } from "types";

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
