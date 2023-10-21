/** @jsxImportSource @emotion/react */
import HomeCard, { HomeCardProps } from "./HomeCard";
import { Heading, Paragraph, Seo, Flex } from "components";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { getMediaMaxQuery } from "consts";

const HOME_MENU_LINK: HomeCardProps[] = [
  {
    description: "This is contact list. Place to see your list!",
    title: "Contact List",
    url: "/contacts",
  },
  {
    description: "This is add contact. Place to add your contact!",
    title: "Add Contact",
    url: "/create",
  },
];

const StyledTitle = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

export default function Home() {
  return (
    <Flex
      flexDirection="column"
      flexGrow={1}
      alignItems="center"
      justifyContent="center"
    >
      <Seo title="Contacts Home" description="Contacts Homepage" />
      <StyledTitle>
        <Heading tag="heading1">Hi 👋🏻, welcome to Contacts!</Heading>
        <Paragraph>Please choose one of the menus below to explore!</Paragraph>
      </StyledTitle>

      <Flex
        justifyContent="center"
        gap={20}
        css={css({
          [getMediaMaxQuery("920")]: {
            flexDirection: "column",
          },
        })}
      >
        {HOME_MENU_LINK.map((item, index) => (
          <HomeCard {...item} key={index} />
        ))}
      </Flex>
    </Flex>
  );
}
