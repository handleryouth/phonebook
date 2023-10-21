/** @jsxImportSource @emotion/react */
import Flex from "./Flex";
import styled from "@emotion/styled";
import Heading from "./Heading";
import Link from "./Link";
import { FaAtlas } from "react-icons/fa";
import { css, useTheme } from "@emotion/react";
import { getMediaMaxQuery } from "consts";

const NAVBAR_LINK = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contact List",
    href: "/contacts",
  },
  {
    name: "Create Contact",
    href: "/create",
  },
];

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.gray};
`;

export default function Navbar() {
  const theme = useTheme();
  return (
    <StyledNav
      css={css({
        [getMediaMaxQuery("560")]: {
          justifyContent: "center",
        },
      })}
    >
      <Flex columnGap={10} color="white" alignItems="center">
        <Heading tag="heading1" color="white">
          Contacts
        </Heading>

        <FaAtlas size={20} color={theme.colors.white} />
      </Flex>

      <Flex
        css={css({
          [getMediaMaxQuery("560")]: {
            display: "none",
          },
        })}
        alignItems="center"
        columnGap={23}
      >
        {NAVBAR_LINK.map((item, index) => (
          <Link to={item.href} key={index}>
            {item.name}
          </Link>
        ))}
      </Flex>
    </StyledNav>
  );
}
