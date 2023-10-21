/** @jsxImportSource @emotion/react */
import { Flex } from "../flex";
import styled from "@emotion/styled";
import { Link } from "../link";
import { css } from "@emotion/react";
import { NAVBAR_LINK, getMediaMaxQuery, getMediaMinQuery } from "consts";
import { Branding } from "../branding";
import { Sidebar } from "../sidebar";
import { Button } from "../button";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.gray};
`;

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Sidebar
        toggleCloseSidebar={() => setShowSidebar(false)}
        visible={showSidebar}
      />
      <StyledNav role="navigation">
        <Branding />

        <Button
          css={css({
            [getMediaMinQuery("560")]: {
              display: "none",
            },
          })}
          onClick={() => setShowSidebar(true)}
        >
          <GiHamburgerMenu />
        </Button>

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
    </>
  );
}
