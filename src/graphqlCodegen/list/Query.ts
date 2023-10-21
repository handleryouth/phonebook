import { gql } from "@apollo/client";
import { graphql } from "graphqlCodegen/build";

export const GET_CONTACT_LIST = graphql(`
  query GetContact(
    $limit: Int
    $offset: Int
    $order_by: [contact_order_by!]
    $where: contact_bool_exp
  ) {
    contact(
      limit: $limit
      offset: $offset
      order_by: $order_by
      where: $where
    ) {
      created_at
      first_name
      id
      last_name
      phones {
        number
      }
    }
  }
`);

export const GET_CONTACT_COUNT = gql(`
  query GetContactCount($where: contact_bool_exp) {
    contact_aggregate(
      where: $where
    ) {
      aggregate {
        count
      }
    }
  }
`);

export const GET_CONTACT_DETAIL = graphql(`
  query GetContactDetail($id: Int!) {
    contact_by_pk(id: $id) {
      last_name
      id
      first_name
      created_at
      phones {
        number
      }
    }
  }
`);
