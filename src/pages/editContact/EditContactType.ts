import { Phone_Insert_Input } from "graphqlCodegen/build/graphql";

export type EditContactParamsProps = {
  id: string;
};

export interface CreateFormProps {
  firstName: string;
  lastName: string;
  phones: Phone_Insert_Input[];
}
