import styled from "@emotion/styled";
import { LoadingIndicatorProps } from "types";

interface StyledIconProps {
  size: number;
}

const StyledIcon = styled.i<StyledIconProps>`
  font-size: ${({ size }) => size}rem;
`;

export default function LoadingIndicator({ size = 2 }: LoadingIndicatorProps) {
  return (
    <StyledIcon role="alert" size={size} className="pi pi-spin pi-spinner" />
  );
}
