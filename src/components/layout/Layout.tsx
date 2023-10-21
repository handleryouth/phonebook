import { Global, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { getBreakpoint } from "consts";
import { LayoutProps } from "types";
import { Footer } from "../footer";
import { Navbar } from "../navbar";

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
            backgroundcolor: theme.backgroundColors.black,
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
