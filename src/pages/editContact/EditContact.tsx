/** @jsxImportSource @emotion/react */
import { useMutation, useQuery } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Flex, Heading, InputRHF } from "components";
import {
  ERROR_DELETING_PHONE_NUMBER,
  ERROR_DUPLICATE_NUMBER_KEY,
  ERROR_DUPLICATE_NUMBER_MESSAGE,
  ERROR_EDITING_PHONE_NUMBER,
  ERROR_INSERTING_PHONE_NUMBER,
  ERROR_SOMETHING_WENT_WRONG,
  getMediaMaxQuery,
  getMediaMinQuery,
  REGEX_NUMBER_ONLY,
  REGEX_SPECIAL_CHARACTERS,
} from "consts";
import {
  DELETE_PHONE_NUMBER,
  EDIT_CONTACT_NAME,
  EDIT_PHONE_NUMBER,
  GET_CONTACT_DETAIL,
  INSERT_PHONE_NUMBER,
} from "graphqlCodegen";
import { Phone_Insert_Input } from "graphqlCodegen/build/graphql";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { FieldArrayWithId, useFieldArray, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { CreateFormProps, EditContactParamsProps } from "./EditContactType";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;
  row-gap: 2.5rem;
  width: 70%;
  margin: auto;
  min-width: 270px;
`;

const StyledHeading = styled(Heading)`
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin: auto;
`;

const StyledRemoveButton = styled(Button)`
  flex-basis: 20%;
` as typeof Button;

const StyledInputContainer = styled.div`
  flex-grow: 1;
  width: 100%;
`;

export default function EditContacts() {
  const toast = useRef<Toast>(null);

  const { id } = useParams<EditContactParamsProps>();

  const { control, handleSubmit, reset, getValues } = useForm<CreateFormProps>({
    reValidateMode: "onSubmit",
  });

  const { data: detailData } = useQuery(GET_CONTACT_DETAIL, {
    variables: {
      id: Number(id),
    },
    onCompleted(data) {
      const userData = data.contact_by_pk;

      reset({
        firstName: userData?.first_name ?? "",
        lastName: userData?.last_name ?? "",
        phones: userData?.phones ?? [{ number: "" }],
      });
    },
  });

  const toggleErrorToast = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
    });
  };

  const [insertPhoneNumber] = useMutation(INSERT_PHONE_NUMBER, {
    onError: (error) => {
      if (error.message === ERROR_DUPLICATE_NUMBER_KEY) {
        toggleErrorToast(ERROR_DUPLICATE_NUMBER_MESSAGE);
      } else {
        toggleErrorToast(ERROR_INSERTING_PHONE_NUMBER);
      }
    },
  });

  const [editPhoneNumber] = useMutation(EDIT_PHONE_NUMBER, {
    onError: (error) => {
      if (error.message === ERROR_DUPLICATE_NUMBER_KEY) {
        toggleErrorToast(ERROR_DUPLICATE_NUMBER_MESSAGE);
      } else {
        toggleErrorToast(ERROR_EDITING_PHONE_NUMBER);
      }
    },
  });

  const [deletePhoneNumber] = useMutation(DELETE_PHONE_NUMBER, {
    onError: () => {
      toggleErrorToast(ERROR_DELETING_PHONE_NUMBER);
    },
  });

  const [editContact] = useMutation(EDIT_CONTACT_NAME, {
    onCompleted: () => {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Contact edited successfully",
      });
    },
    onError: () => {
      toggleErrorToast(ERROR_SOMETHING_WENT_WRONG);
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  const createContactHandler = (data: CreateFormProps) => {
    const { firstName, lastName, phones: phonesData } = data;

    if (
      firstName !== detailData?.contact_by_pk?.first_name ||
      lastName !== detailData?.contact_by_pk?.last_name
    ) {
      editContact({
        variables: {
          id: Number(id),
          _set: {
            first_name: firstName,
            last_name: lastName,
            created_at:
              detailData?.contact_by_pk?.created_at ?? new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        },
      });

      if (
        phonesData.length < (detailData?.contact_by_pk?.phones?.length ?? 0)
      ) {
        const deletedPhoneNumbers = detailData?.contact_by_pk?.phones.filter(
          (item) => {
            return !phonesData.some((phone) => phone.number === item.number);
          }
        );

        deletedPhoneNumbers?.forEach((item) => {
          deletePhoneNumber({
            variables: {
              contact_id: Number(id),
              number: item.number,
            },
          });
        });
      } else {
        phonesData.forEach((phone, index) => {
          const phoneId = detailData?.contact_by_pk?.id;

          if (
            phone.number !== undefined &&
            phone.number !== null &&
            phoneId !== undefined &&
            detailData?.contact_by_pk?.phones[index]?.number !== undefined &&
            phone.number !== detailData?.contact_by_pk?.phones[index].number
          ) {
            editPhoneNumber({
              variables: {
                new_phone_number: phone.number,
                pk_columns: {
                  contact_id: phoneId,
                  number: detailData?.contact_by_pk?.phones[index].number,
                },
              },
            });
          } else if (
            phone.number !== undefined &&
            phone.number !== null &&
            detailData?.contact_by_pk?.phones[index]?.number === undefined
          ) {
            insertPhoneNumber({
              variables: {
                contact_id: Number(id),
                phone_number: phone.number,
              },
            });
          }
        });
      }
    }
  };

  return (
    <div>
      <Toast ref={toast} />
      <StyledHeading tag="heading1">Create Contact</StyledHeading>

      <StyledForm
        css={css({
          [getMediaMinQuery("920")]: {
            width: "40rem",
          },
        })}
        onSubmit={handleSubmit(createContactHandler)}
      >
        <InputRHF
          control={control}
          name="firstName"
          inputComponentProps={{
            label: "First Name",
            placeholder: "Enter First Name",
          }}
          rules={{
            required: "First Name is required",
            pattern: {
              value: REGEX_SPECIAL_CHARACTERS,
              message: "First Name cannot contain special characters",
            },
          }}
        />

        <InputRHF
          control={control}
          name="lastName"
          inputComponentProps={{
            label: "Last Name",
            placeholder: "Enter Last Name",
          }}
          rules={{
            pattern: {
              value: REGEX_SPECIAL_CHARACTERS,
              message: "Last Name cannot contain special characters",
            },
          }}
        />

        {fields.map((item: FieldArrayWithId<Phone_Insert_Input>, index) => (
          <Flex
            css={css({
              [getMediaMaxQuery("920")]: {
                flexDirection: "column",
                alignItems: "start",
              },
            })}
            alignItems="flex-end"
            width="100%"
            columnGap={10}
            rowGap={20}
            key={item.id}
          >
            <StyledInputContainer>
              <InputRHF
                key={item.id}
                control={control}
                inputComponentProps={{
                  label: `Phone ${index + 1}`,
                  placeholder: "Enter Phone Number",
                }}
                rules={{
                  required: "Phone Number is required",
                  validate: {
                    isUnique: (value) => {
                      const getValuesNumber = getValues("phones");
                      const isUnique = getValuesNumber.filter(
                        (item) => item.number === value
                      );

                      if (isUnique.length > 1) {
                        return "Phone Number must be unique.";
                      }
                    },
                  },
                  pattern: {
                    value: REGEX_NUMBER_ONLY,
                    message: "Phone Number can only contain numbers",
                  },
                }}
                name={`phones.${index}.number`}
              />
            </StyledInputContainer>

            {index > 0 && (
              <StyledRemoveButton
                onClick={() => remove(index)}
                label="Remove"
              />
            )}
          </Flex>
        ))}

        <StyledButton
          onClick={() =>
            append({
              number: "",
            })
          }
          label="Add Another Phone Number"
        />

        <Button type="submit" backgroundcolor="blue" label="Submit" />
      </StyledForm>
    </div>
  );
}
