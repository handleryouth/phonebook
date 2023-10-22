import styled from "@emotion/styled";
import { Heading, Link, Paragraph } from "components";
import { Card } from "primereact/card";

import { HomeCardProps } from "./HomeType";

const StyledCard = styled(Card)`
  background: ${({ theme }) => `linear-gradient(
    45deg,
    ${theme.borderColors.black} 84%,
    ${theme.borderColors.purple} 92%,
    ${theme.borderColors.blue} 100%
  )`};
  border: 2px solid ${({ theme }) => theme.borderColors.gray};
  max-width: 400px;
  width: 100%;
  min-width: 300px;
`;

const StyledParagraph = styled(Paragraph)`
  height: 50px;
`;

export default function HomeCard({ description, title, url }: HomeCardProps) {
  return (
    <StyledCard
      title={
        <Heading color="white" tag="heading3">
          {title}
        </Heading>
      }
      subTitle={<StyledParagraph color="white">{description}</StyledParagraph>}
    >
      <Link to={url}>See details</Link>
    </StyledCard>
  );
}
