import styled from "@emotion/styled";

import { ExternalLink } from "../externalLink";
import { Paragraph } from "../paragraph";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${({ theme }) => theme.backgroundColors.black};
  border-top: solid;
  border-width: 2px;
  border-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.borderColors.purple}, ${theme.borderColors.orchid}) 1`};
`;

export default function Footer() {
  return (
    <StyledFooter role="contentinfo">
      <Paragraph color="white">
        Made by{" "}
        <ExternalLink
          to="https://github.com/handleryouth"
          rel="noreferrer noopener"
          target="_blank"
          data-testid="footer-link"
        >
          <strong>Tony David</strong>
        </ExternalLink>
      </Paragraph>
    </StyledFooter>
  );
}
