import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "components/link";
import { FaAtlas } from "react-icons/fa";

import { Flex } from "../flex";
import { Heading } from "../heading";

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

export default function Branding() {
  const theme = useTheme();
  return (
    <StyledLink to="/">
      <Flex columnGap={10} color="white" alignItems="center">
        <Heading tag="heading1" color="white">
          Contacts
        </Heading>

        <FaAtlas size={20} color={theme.colors.white} />
      </Flex>
    </StyledLink>
  );
}
