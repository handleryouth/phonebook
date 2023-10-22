import styled from "@emotion/styled";
import { Button as PrimereactButton } from "primereact/button";
import { ComponentProps } from "react";
import { ThemeBackgroundColors, ThemeBorderColors, ThemeColors } from "types";

interface StyledButtonProps {
  backgroundcolor: ThemeBackgroundColors;
  color: ThemeColors;
  bordercolor: ThemeBorderColors;
}

const StyledButton = styled(PrimereactButton)<StyledButtonProps>`
  background-color: ${({ theme, backgroundcolor }) =>
    theme.backgroundColors[backgroundcolor]};
  color: ${({ theme, color }) => theme.colors[color]};
  border-color: ${({ theme, bordercolor }) => theme.borderColors[bordercolor]};
  text-align: center;
  height: 50px;

  &:focus {
    outline: none;
    box-shadow: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${({ theme, bordercolor }) => theme.borderColors[bordercolor]};
  }
`;

interface ButtonProps extends ComponentProps<typeof PrimereactButton> {
  backgroundcolor?: ThemeBackgroundColors;
  color?: ThemeColors;
  bordercolor?: ThemeBorderColors;
}

export default function Button({
  backgroundcolor = "black",
  color = "white",
  bordercolor = "white",
  size = "small",
  type = "button",
  ...item
}: ButtonProps) {
  return (
    <StyledButton
      {...item}
      size={size}
      color={color}
      type={type}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
    />
  );
}
