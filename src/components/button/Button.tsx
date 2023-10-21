import React, { ComponentProps } from "react";
import { Button as PrimereactButton } from "primereact/button";
import styled from "@emotion/styled";
import { ThemeBackgroundColors, ThemeBorderColors, ThemeColors } from "types";

interface StyledButtonProps {
  $backgroundColor: ThemeBackgroundColors;
  $color: ThemeColors;
  $borderColor: ThemeBorderColors;
}

const StyledButton = styled(PrimereactButton)<StyledButtonProps>`
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

interface ButtonProps extends ComponentProps<typeof PrimereactButton> {
  backgroundColor?: ThemeBackgroundColors;
  color?: ThemeColors;
  borderColor?: ThemeBorderColors;
}

export default function Button({
  backgroundColor = "black",
  color = "white",
  borderColor = "white",
  size = "small",
  type = "button",
  ...item
}: ButtonProps) {
  return (
    <StyledButton
      {...item}
      size={size}
      $color={color}
      type={type}
      $borderColor={borderColor}
      $backgroundColor={backgroundColor}
    />
  );
}
