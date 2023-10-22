import { GetContactQuery } from "graphqlCodegen/build/graphql";
import { ArrayElement } from "types";

export type ContactHeaderTable =
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "id"
  | "createdAt"
  | "actions";

export type ContactListType = ArrayElement<GetContactQuery["contact"]>;

export interface ContactCountProps {
  contact_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

export interface ShowDeleteModalStateProps {
  id: number;
  visible: boolean;
}

export interface ContactSearchProps {
  search: string;
}

export interface DeleteModalProps {
  visible: boolean;
  toggleCloseModal: () => void;
  onConfirm: () => void;
}
