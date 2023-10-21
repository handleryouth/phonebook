/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation CreateContact(\n    $first_name: String!\n    $last_name: String!\n    $phones: [phone_insert_input!]!\n  ) {\n    insert_contact(\n      objects: {\n        first_name: $first_name\n        last_name: $last_name\n        phones: { data: $phones }\n      }\n    ) {\n      returning {\n        first_name\n        last_name\n        id\n        phones {\n          number\n        }\n      }\n    }\n  }\n": types.CreateContactDocument,
    "\n  mutation DeleteContact($id: Int!) {\n    delete_contact_by_pk(id: $id) {\n      id\n    }\n  }\n": types.DeleteContactDocument,
    "\n  mutation EditContact($id: Int!, $_set: contact_set_input) {\n    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {\n      id\n      first_name\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n": types.EditContactDocument,
    "\n  mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {\n    insert_phone(objects: { contact_id: $contact_id, number: $phone_number }) {\n      returning {\n        contact {\n          id\n          last_name\n          first_name\n          phones {\n            number\n          }\n        }\n      }\n    }\n  }\n": types.AddNumberToContactDocument,
    "\n  mutation EditPhoneNumber(\n    $pk_columns: phone_pk_columns_input!\n    $new_phone_number: String!\n  ) {\n    update_phone_by_pk(\n      pk_columns: $pk_columns\n      _set: { number: $new_phone_number }\n    ) {\n      contact {\n        id\n        last_name\n        first_name\n        created_at\n        phones {\n          number\n        }\n      }\n    }\n  }\n": types.EditPhoneNumberDocument,
    "\n  mutation DeletePhone($contact_id: Int!, $number: String!) {\n    delete_phone_by_pk(contact_id: $contact_id, number: $number) {\n      id\n      contact_id\n      contact {\n        first_name\n        last_name\n      }\n    }\n  }\n": types.DeletePhoneDocument,
    "\n  query GetContact(\n    $limit: Int\n    $offset: Int\n    $order_by: [contact_order_by!]\n    $where: contact_bool_exp\n  ) {\n    contact(\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n      where: $where\n    ) {\n      created_at\n      first_name\n      id\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n": types.GetContactDocument,
    "\n  query GetContactCount($where: contact_bool_exp) {\n    contact_aggregate(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n": types.GetContactCountDocument,
    "\n  query GetContactDetail($id: Int!) {\n    contact_by_pk(id: $id) {\n      last_name\n      id\n      first_name\n      created_at\n      phones {\n        number\n      }\n    }\n  }\n": types.GetContactDetailDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateContact(\n    $first_name: String!\n    $last_name: String!\n    $phones: [phone_insert_input!]!\n  ) {\n    insert_contact(\n      objects: {\n        first_name: $first_name\n        last_name: $last_name\n        phones: { data: $phones }\n      }\n    ) {\n      returning {\n        first_name\n        last_name\n        id\n        phones {\n          number\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation CreateContact(\n    $first_name: String!\n    $last_name: String!\n    $phones: [phone_insert_input!]!\n  ) {\n    insert_contact(\n      objects: {\n        first_name: $first_name\n        last_name: $last_name\n        phones: { data: $phones }\n      }\n    ) {\n      returning {\n        first_name\n        last_name\n        id\n        phones {\n          number\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeleteContact($id: Int!) {\n    delete_contact_by_pk(id: $id) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation DeleteContact($id: Int!) {\n    delete_contact_by_pk(id: $id) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditContact($id: Int!, $_set: contact_set_input) {\n    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {\n      id\n      first_name\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditContact($id: Int!, $_set: contact_set_input) {\n    update_contact_by_pk(pk_columns: { id: $id }, _set: $_set) {\n      id\n      first_name\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {\n    insert_phone(objects: { contact_id: $contact_id, number: $phone_number }) {\n      returning {\n        contact {\n          id\n          last_name\n          first_name\n          phones {\n            number\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation AddNumberToContact($contact_id: Int!, $phone_number: String!) {\n    insert_phone(objects: { contact_id: $contact_id, number: $phone_number }) {\n      returning {\n        contact {\n          id\n          last_name\n          first_name\n          phones {\n            number\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation EditPhoneNumber(\n    $pk_columns: phone_pk_columns_input!\n    $new_phone_number: String!\n  ) {\n    update_phone_by_pk(\n      pk_columns: $pk_columns\n      _set: { number: $new_phone_number }\n    ) {\n      contact {\n        id\n        last_name\n        first_name\n        created_at\n        phones {\n          number\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation EditPhoneNumber(\n    $pk_columns: phone_pk_columns_input!\n    $new_phone_number: String!\n  ) {\n    update_phone_by_pk(\n      pk_columns: $pk_columns\n      _set: { number: $new_phone_number }\n    ) {\n      contact {\n        id\n        last_name\n        first_name\n        created_at\n        phones {\n          number\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePhone($contact_id: Int!, $number: String!) {\n    delete_phone_by_pk(contact_id: $contact_id, number: $number) {\n      id\n      contact_id\n      contact {\n        first_name\n        last_name\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation DeletePhone($contact_id: Int!, $number: String!) {\n    delete_phone_by_pk(contact_id: $contact_id, number: $number) {\n      id\n      contact_id\n      contact {\n        first_name\n        last_name\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContact(\n    $limit: Int\n    $offset: Int\n    $order_by: [contact_order_by!]\n    $where: contact_bool_exp\n  ) {\n    contact(\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n      where: $where\n    ) {\n      created_at\n      first_name\n      id\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContact(\n    $limit: Int\n    $offset: Int\n    $order_by: [contact_order_by!]\n    $where: contact_bool_exp\n  ) {\n    contact(\n      limit: $limit\n      offset: $offset\n      order_by: $order_by\n      where: $where\n    ) {\n      created_at\n      first_name\n      id\n      last_name\n      phones {\n        number\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContactCount($where: contact_bool_exp) {\n    contact_aggregate(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContactCount($where: contact_bool_exp) {\n    contact_aggregate(\n      where: $where\n    ) {\n      aggregate {\n        count\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetContactDetail($id: Int!) {\n    contact_by_pk(id: $id) {\n      last_name\n      id\n      first_name\n      created_at\n      phones {\n        number\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetContactDetail($id: Int!) {\n    contact_by_pk(id: $id) {\n      last_name\n      id\n      first_name\n      created_at\n      phones {\n        number\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;