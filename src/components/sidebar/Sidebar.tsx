/** @jsxImportSource @emotion/react */
import { Sidebar as PrimereactSidebar } from "primereact/sidebar";
import { Branding } from "../branding";
import { NAVBAR_LINK, getMediaMinQuery } from "consts";
import { Link } from "../link";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Heading } from "../heading";
import { SidebarProps } from "types";

const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledList = styled.li`
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  font-size: 1.4rem;
`;

export default function Sidebar({ visible, toggleCloseSidebar }: SidebarProps) {
  return (
    <PrimereactSidebar
      css={css({
        [getMediaMinQuery("560")]: {
          display: "none",
        },
      })}
      visible={visible}
      onHide={toggleCloseSidebar}
    >
      <Branding />

      <Heading tag="heading1">Where to go?</Heading>

      <StyledUl>
        {NAVBAR_LINK.map((item, index) => (
          <StyledList onClick={toggleCloseSidebar} key={index}>
            <StyledLink role="link" to={item.href}>
              {item.name}
            </StyledLink>
          </StyledList>
        ))}
      </StyledUl>
    </PrimereactSidebar>
  );
}
