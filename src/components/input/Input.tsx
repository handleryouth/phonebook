import { ComponentProps } from "react";
import { InputText } from "primereact/inputtext";
import styled from "@emotion/styled";
import { Flex } from "../flex";

const StyledInput = styled(InputText)`
  &:focus {
    border-color: ${({ theme }) => theme.borderColors.white};
  }
`;

interface InputBaseProps extends ComponentProps<typeof InputText> {
  errorMessage?: string;
}

export type InputProps = (
  | {
      label?: undefined;
    }
  | {
      label: string;
      name: string;
    }
) &
  InputBaseProps;

export default function Input({
  errorMessage,
  label,
  name,
  ...item
}: InputProps) {
  if (label !== undefined) {
    return (
      <Flex flexDirection="column" rowGap={2}>
        <label htmlFor={name}>{label}</label>
        <StyledInput {...item} />
        {errorMessage && <small className="p-error">{errorMessage}</small>}
      </Flex>
    );
  }

  return <StyledInput {...item} />;
}
