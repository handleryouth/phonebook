/** @jsxImportSource @emotion/react */
import { useMutation } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Button, Flex, Heading, InputRHF } from "components";
import {
  ERROR_DUPLICATE_NUMBER_KEY,
  ERROR_DUPLICATE_NUMBER_MESSAGE,
  ERROR_SOMETHING_WENT_WRONG,
  getMediaMaxQuery,
  getMediaMinQuery,
  REGEX_NUMBER_ONLY,
  REGEX_SPECIAL_CHARACTERS,
} from "consts";
import { CREATE_CONTACT } from "graphqlCodegen";
import { Phone_Insert_Input } from "graphqlCodegen/build/graphql";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { FieldArrayWithId, useFieldArray, useForm } from "react-hook-form";

import { CreateFormProps } from "./CreateContactType";

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

export default function Create() {
  const toast = useRef<Toast>(null);

  const { control, handleSubmit, reset, getValues } = useForm<CreateFormProps>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phones: [
        {
          number: "",
        },
      ],
    },

    reValidateMode: "onSubmit",
  });

  const showErrorToast = (message: string) => {
    toast.current?.show({
      severity: "error",
      summary: "Error",
      detail: message,
    });
  };

  const [createContact] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.current?.show({
        severity: "success",
        summary: "Success",
        detail: "Contact created successfully",
      });
      reset();
    },
    onError: (error) => {
      if (error.message === ERROR_DUPLICATE_NUMBER_KEY) {
        showErrorToast(ERROR_DUPLICATE_NUMBER_MESSAGE);
      } else {
        showErrorToast(ERROR_SOMETHING_WENT_WRONG);
      }
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  const createContactHandler = async (data: CreateFormProps) => {
    const { firstName, lastName, phones } = data;

    createContact({
      variables: {
        first_name: firstName,
        last_name: lastName,
        phones,
      },
    });
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
            rowGap={25}
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
                    message: "Phone Number can only contain numbers.",
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
