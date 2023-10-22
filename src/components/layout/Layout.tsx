/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getBreakpoint, getMediaMinQuery } from "consts";
import { LayoutProps } from "types";
import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { FavoritesSidebar } from "../favoritesSidebar";
import { Button } from "../button";
import { BsFillBookmarkStarFill } from "react-icons/bs";

const StyledContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  max-width: ${getBreakpoint("1440")};
`;

const StyledFavoritesButton = styled(Button)`
  position: fixed;
  top: 50%;
  right: 0;
  bottom: 50%;
  z-index: 2;
`;

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  const [showFavoritesSidebar, setShowFavoritesSidebar] = useState(false);

  return (
    <StyledContainer>
      <FavoritesSidebar
        toggleCloseSidebar={() => setShowFavoritesSidebar(false)}
        visible={showFavoritesSidebar}
      />

      <StyledFavoritesButton onClick={() => setShowFavoritesSidebar(true)}>
        <BsFillBookmarkStarFill />
      </StyledFavoritesButton>
      <Global
        styles={{
          body: {
            fontFamily: "Inter, sans-serif",
            margin: 0,
            backgroundcolor: theme.backgroundColors.black,
            minWidth: getBreakpoint("320"),
          },
        }}
      />
      <Navbar />
      <StyledContent
        css={{
          [getMediaMinQuery("1440")]: {
            margin: "auto",
          },
        }}
      >
        {children}
      </StyledContent>
      <Footer />
    </StyledContainer>
  );
}
