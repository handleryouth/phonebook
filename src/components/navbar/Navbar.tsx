/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { getMediaMaxQuery, getMediaMinQuery,NAVBAR_LINK } from "consts";
import { lazy,Suspense, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { getWindowDimensions } from "utils";

import { Branding } from "../branding";
import { Button } from "../button";
import { Flex } from "../flex";
import { Link } from "../link";

const LazySidebar = lazy(() => import("../sidebar/Sidebar"));

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 2;
  border-bottom: solid;
  border-width: 2px;
  border-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.borderColors.purple}, ${theme.borderColors.orchid}) 1`};
`;

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Suspense>
        {getWindowDimensions().width < 560 && (
          <LazySidebar
            toggleCloseSidebar={() => setShowSidebar(false)}
            visible={showSidebar}
          />
        )}
      </Suspense>

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
