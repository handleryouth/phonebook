import styled from "@emotion/styled";
import { InputText } from "primereact/inputtext";
import { ComponentProps } from "react";

import { Flex } from "../flex";

const StyledInput = styled(InputText)`
  &:focus {
    border-color: ${({ theme }) => theme.borderColors.white};
  }
`;

interface InputBaseProps extends ComponentProps<typeof InputText> {
  errorMessage?: string;
}

const StyledFlex = styled(Flex)`
  position: relative;
`;

const StyledErrorMessage = styled.small`
  position: absolute;
  bottom: -20px;
`;

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
      <StyledFlex flexDirection="column" rowGap={2}>
        <label htmlFor={name}>{label}</label>
        <StyledInput aria-labelledby={name} {...item} />
        {errorMessage && (
          <StyledErrorMessage className="p-error">
            {errorMessage}
          </StyledErrorMessage>
        )}
      </StyledFlex>
    );
  }

  return <StyledInput {...item} />;
}
