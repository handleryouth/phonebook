import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getBreakpoint } from "consts";

export interface LayoutProps {
  children: ReactNode;
}

const StyledContainer = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
`;

export default function Layout({ children }: LayoutProps) {
  const theme = useTheme();
  return (
    <StyledContainer>
      <Global
        styles={{
          body: {
            fontFamily: "Inter Variable, sans-serif",
            margin: 0,
            backgroundColor: theme.backgroundColors.black,
            minWidth: getBreakpoint("320"),
          },
        }}
      />
      <Navbar />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledContainer>
  );
}
