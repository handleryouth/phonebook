import { useMemo } from "react";
import { Sidebar } from "primereact/sidebar";
import styled from "@emotion/styled";
import { useFavoritesContact } from "context";
import { FavoritesSidebarProps } from "types";
import { Paragraph } from "../paragraph";
import { Heading } from "../heading";
import { Link } from "../link";
import { Button } from "../button";
import { Flex } from "../flex";

const StyledFavoritesContaier = styled.div`
  border: 2px solid ${({ theme }) => theme.borderColors.gray};
  padding: 1rem;
  border-radius: 8px;
`;

const StyledHeading = styled(Heading)`
  position: sticky;
  background-color: ${({ theme }) => theme.backgroundColors.blackLight};
  top: 0;
  z-index: 2;
`;

export default function FavoritesSidebar({
  visible,
  toggleCloseSidebar,
}: FavoritesSidebarProps) {
  const { values, dispatch } = useFavoritesContact();

  const favoritesEntries = useMemo(
    () => values && Object.entries(values),
    [values]
  );

  return (
    <Sidebar visible={visible} position="right" onHide={toggleCloseSidebar}>
      <StyledHeading tag="heading1">Favorites</StyledHeading>
      {favoritesEntries !== undefined ? (
        <Flex flexDirection="column" rowGap={20}>
          {favoritesEntries.map(([key, value]) => (
            <StyledFavoritesContaier key={key}>
              <Paragraph>First Name : {value.first_name}</Paragraph>
              <Paragraph>Last Name : {value.last_name}</Paragraph>
              <Button
                onClick={() =>
                  dispatch((prevState) => {
                    const newState = { ...prevState };
                    delete newState[key];
                    return newState;
                  })
                }
              >
                Remove
              </Button>
            </StyledFavoritesContaier>
          ))}
        </Flex>
      ) : (
        <Paragraph>
          No favorites. Try to add some from{" "}
          <Link onClick={toggleCloseSidebar} to="/contacts">
            Contact List
          </Link>
        </Paragraph>
      )}
    </Sidebar>
  );
}
