import { GetContactQuery } from "graphqlCodegen/build/graphql";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ArrayElement } from "types";

interface FavoritesContactProviderProps {
  children: ReactNode;
}

type ContactListType =
  | Record<string, ArrayElement<GetContactQuery["contact"]>>
  | undefined;

interface FavoritesContactContextProps {
  values: ContactListType;
  dispatch: Dispatch<SetStateAction<ContactListType>>;
}

const FavoritesContactContext = createContext<
  FavoritesContactContextProps | undefined
>(undefined);

export function FavoritesContactProvider({
  children,
}: FavoritesContactProviderProps) {
  const [favoritesContact, setFavoritesContact] = useState<ContactListType>();

  return (
    <FavoritesContactContext.Provider
      value={{
        dispatch: setFavoritesContact,
        values: favoritesContact,
      }}
    >
      {children}
    </FavoritesContactContext.Provider>
  );
}

export function useFavoritesContact() {
  const context = useContext(FavoritesContactContext);

  if (!context) {
    throw new Error(
      "useFavoritesContact must be used within a FavoritesContactProvider"
    );
  }

  return context;
}
