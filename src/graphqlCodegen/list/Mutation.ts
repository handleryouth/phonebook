import { graphql } from "graphqlCodegen/build";

export const CREATE_CONTACT = graphql(`
  mutation CreateContact(
    $first_name: String!
    $last_name: String!
    $phones: [phone_insert_input!]!
  ) {
    insert_contact(
      objects: {
        first_name: $first_name
        last_name: $last_name
        phones: { data: $phones }
      }
    ) {
      returning {
        first_name
        last_name
        id
        phones {
          number
        }
      }
    }
  }
`);

export const DELETE_CONTACT = graphql(`
  mutation DeleteContact($id: Int!) {
    delete_contact_by_pk(id: $id) {
      id
    }
  }
`);

export const EDIT_CONTACT_NAME = graphql(`
  mutation EditContact($id: Int!, $_set: contact_set_input) {
    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {
      id
      first_name
      last_name
      phones {
        number
      }
    }
  }
`);

export const INSERT_PHONE_NUMBER = graphql(`
  mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {
    insert_phone(objects: { contact_id: $contact_id, number: $phone_number }) {
      returning {
        contact {
          id
          last_name
          first_name
          phones {
            number
          }
        }
      }
    }
  }
`);

export const EDIT_PHONE_NUMBER = graphql(`
  mutation EditPhoneNumber(
    $pk_columns: phone_pk_columns_input!
    $new_phone_number: String!
  ) {
    update_phone_by_pk(
      pk_columns: $pk_columns
      _set: { number: $new_phone_number }
    ) {
      contact {
        id
        last_name
        first_name
        created_at
        phones {
          number
        }
      }
    }
  }
`);

export const DELETE_PHONE_NUMBER = graphql(`
  mutation DeletePhone($contact_id: Int!, $number: String!) {
    delete_phone_by_pk(contact_id: $contact_id, number: $number) {
      id
      contact_id
      contact {
        first_name
        last_name
      }
    }
  }
`);
