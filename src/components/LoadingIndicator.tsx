import styled from "@emotion/styled";

interface StyledIconProps {
  size: number;
}

const StyledIcon = styled.i<StyledIconProps>`
  font-size: ${({ size }) => size}rem;
`;

interface LoadingIndicatorProps {
  size: number;
}

export default function LoadingIndicator({ size = 2 }: LoadingIndicatorProps) {
  return (
    <StyledIcon size={size} className="pi pi-spin pi-spinner"></StyledIcon>
  );
}
