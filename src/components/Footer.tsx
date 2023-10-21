import styled from "@emotion/styled";
import Paragraph from "./Paragraph";
import ExternalLink from "./ExternalLink";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${({ theme }) => theme.backgroundColors.black};
  border-top: 1px solid #eaeaea;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <Paragraph color="white">
        Made by{" "}
        <ExternalLink
          to="https://github.com/handleryouth"
          rel="noreferrer noopener"
          target="_blank"
        >
          <strong>Tony David</strong>
        </ExternalLink>
      </Paragraph>
    </StyledFooter>
  );
}
