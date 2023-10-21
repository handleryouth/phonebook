import styled from "@emotion/styled";
import { SplitButton as PrimereactSplitButton } from "primereact/splitbutton";
import { ComponentProps } from "react";
import { ThemeBackgroundColors, ThemeColors, ThemeBorderColors } from "types";

interface StyledButtonProps {
  $backgroundColor: ThemeBackgroundColors;
  $color: ThemeColors;
  $borderColor: ThemeBorderColors;
}

const StyledSplitButton = styled(PrimereactSplitButton)<StyledButtonProps>`
  background-color: ${({ theme, $backgroundColor }) =>
    theme.backgroundColors[$backgroundColor]};
  color: ${({ theme, $color }) => theme.colors[$color]};
  border-color: ${({ theme, $borderColor }) =>
    theme.borderColors[$borderColor]};
  text-align: center;
  height: 50px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme, $borderColor }) => theme.borderColors[$borderColor]};
  }
`;

export interface SplitButtonProps
  extends ComponentProps<typeof PrimereactSplitButton> {
  backgroundColor?: ThemeBackgroundColors;
  color?: ThemeColors;
  borderColor?: ThemeBorderColors;
}

export default function SplitButton({
  backgroundColor = "black",
  color = "white",
  borderColor = "white",
  size = "small",
  ...item
}: SplitButtonProps) {
  return (
    <StyledSplitButton
      {...item}
      size={size}
      $color={color}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
    />
  );
}
