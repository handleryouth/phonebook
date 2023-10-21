/** @jsxImportSource @emotion/react */
import { useCallback, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { Toast } from "primereact/toast";
import { useForm } from "react-hook-form";
import {
  Button,
  Flex,
  Heading,
  InputRHF,
  Pagination,
  Seo,
  SplitButton,
  Table,
} from "components";
import { ArrayElement, TableColumnString } from "types";
import { useMutation, useQuery } from "@apollo/client";
import {
  DELETE_CONTACT,
  GET_CONTACT_COUNT,
  GET_CONTACT_LIST,
} from "graphqlCodegen";
import { GetContactQuery, Order_By } from "graphqlCodegen/build/graphql";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formatDate } from "utils";
import { MenuItem } from "primereact/menuitem";
import DeleteModal from "./DeleteModal";
import { css } from "@emotion/react";
import { getMediaMaxQuery } from "consts";

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const StyledContainer = styled.div`
  padding: 2rem;
`;

type ContactHeaderTable =
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "id"
  | "createdAt"
  | "actions";

type ContactListType = ArrayElement<GetContactQuery["contact"]>;

interface ContactCountProps {
  contact_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

const CONTACT_DATA_LIMIT = 10;

interface ShowDeleteModalStateProps {
  id: number;
  visible: boolean;
}

interface ContactSearchProps {
  search: string;
}

export default function Contacts() {
  const [searchParams, setSearchParams] = useSearchParams({
    page: "1",
    search: "",
  });

  const searchQuery = searchParams.get("search");

  const pageQuery = searchParams.get("page");

  const caseInsensitiveSearch = searchQuery ? `%${searchQuery}%` : undefined;

  const { control, handleSubmit } = useForm<ContactSearchProps>();

  const [showDeleteModal, setShowDeleteModal] =
    useState<ShowDeleteModalStateProps>();

  const toast = useRef<Toast>(null);

  const navigate = useNavigate();

  const actionItems = useCallback(
    (item: ContactListType): MenuItem[] => [
      {
        label: "Delete",
        icon: "pi pi-trash",
        command: () => {
          setShowDeleteModal({
            visible: true,
            id: item.id,
          });
        },
      },
      {
        label: "Favorite",
        icon: "pi pi-star",
        command: () => {},
      },
    ],
    []
  );

  const { data: dataCount } = useQuery<ContactCountProps>(GET_CONTACT_COUNT, {
    fetchPolicy: "no-cache",
    variables: {
      where: {
        first_name: {
          _ilike: caseInsensitiveSearch,
        },
      },
    },
  });

  const { data, loading } = useQuery(GET_CONTACT_LIST, {
    fetchPolicy: "no-cache",
    variables: {
      limit: CONTACT_DATA_LIMIT,
      offset: (Number(pageQuery) - 1) * CONTACT_DATA_LIMIT,
      order_by: {
        created_at: Order_By["Desc"],
      },
      where: {
        first_name: {
          _ilike: caseInsensitiveSearch,
        },
      },
    },
    onError: () => {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to fetch contact list",
      });
    },
  });

  const [deleteContact] = useMutation(DELETE_CONTACT, {
    refetchQueries: [GET_CONTACT_LIST],
    onError: () => {
      toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Failed to delete contact",
      });
    },
    update: (cache, { data }) => {
      const mutationKey = data?.delete_contact_by_pk;

      if (mutationKey !== undefined && mutationKey?.id !== undefined) {
        const { id } = mutationKey;
        const getQuery = cache.readQuery({
          query: GET_CONTACT_LIST,
          variables: {
            limit: CONTACT_DATA_LIMIT,
            offset: (Number(searchParams.get("page")) - 1) * CONTACT_DATA_LIMIT,
          },
        });
        const newData = {
          contact: getQuery?.contact.filter(
            (contact: ContactListType) => contact.id !== id
          ),
        };
        return newData;
      } else {
        return;
      }
    },
  });

  const headerColumn = useMemo((): TableColumnString<ContactHeaderTable> => {
    return {
      id: "ID",
      firstName: "First Name",
      lastName: "Last Name",
      phoneNumber: "Phone Number",
      createdAt: "Created At",
      actions: "Actions",
    };
  }, []);

  const getItem = useCallback(
    (item: ContactListType): TableColumnString<ContactHeaderTable> => {
      return {
        id: item.id,
        firstName: item.first_name,
        lastName: item.last_name,
        createdAt: formatDate(item.created_at),
        phoneNumber: item.phones.map((phone) => phone.number).join(", "),
        actions: (
          <SplitButton
            severity="info"
            label="Edit"
            onClick={() => navigate(`/edit/${item.id}`)}
            model={actionItems(item)}
          />
        ),
      };
    },
    [actionItems, navigate]
  );

  const searchContact = (data: ContactSearchProps) => {
    setSearchParams({
      page: "1",
      search: data.search,
    });
  };

  return (
    <StyledContainer>
      <DeleteModal
        onConfirm={() =>
          showDeleteModal &&
          deleteContact({
            variables: {
              id: showDeleteModal.id,
            },

            optimisticResponse: {
              delete_contact_by_pk: {
                id: showDeleteModal.id,
                __typename: "contact",
              },
            },

            onCompleted: () => {
              setShowDeleteModal(undefined);
              toast.current?.show({
                severity: "success",
                summary: "Success",
                detail: "Contact deleted successfully",
              });
            },
          })
        }
        toggleCloseModal={() => setShowDeleteModal(undefined)}
        visible={!!showDeleteModal?.visible}
      />
      <Toast ref={toast} />
      <Seo title="Contacts List" description="Contact List" />
      <Flex
        css={css({
          [getMediaMaxQuery("920")]: {
            flexDirection: "column",
            margin: "20px 0",
          },
        })}
        alignItems="center"
        justifyContent="space-between"
      >
        <StyledHeading tag="heading1">Contact List</StyledHeading>

        <Flex
          css={css({
            [getMediaMaxQuery("920")]: {
              flexDirection: "column",
              gap: 20,
              width: "100%",
            },
          })}
          alignItems="center"
          columnGap={20}
        >
          <form
            css={css({
              [getMediaMaxQuery("560")]: {
                width: "100%",
              },
            })}
            onSubmit={handleSubmit(searchContact)}
          >
            <InputRHF
              control={control}
              name="search"
              inputComponentProps={{
                placeholder: "Search Contact",
                style: {
                  width: "100%",
                },
              }}
            />
          </form>

          <Button onClick={() => navigate("/create")}>Create Contact</Button>
        </Flex>
      </Flex>

      <Table
        columns={headerColumn}
        data={data?.contact}
        renderItem={getItem}
        sortableField={{
          id: true,
        }}
        keyExtractor="id"
        loading={loading}
      />

      <Pagination
        handlePageChange={(page) => {
          setSearchParams({
            page: String(page + 1),
          });
        }}
        page={Number(pageQuery)}
        totalRecords={dataCount?.contact_aggregate.aggregate.count ?? 0}
      />
    </StyledContainer>
  );
}
