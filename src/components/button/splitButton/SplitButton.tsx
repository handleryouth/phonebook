import styled from "@emotion/styled";
import { SplitButton as PrimereactSplitButton } from "primereact/splitbutton";
import { ComponentProps } from "react";
import { ThemeBackgroundColors, ThemeColors, ThemeBorderColors } from "types";

interface StyledButtonProps {
  backgroundcolor: ThemeBackgroundColors;
  color: ThemeColors;
  bordercolor: ThemeBorderColors;
}

const StyledSplitButton = styled(PrimereactSplitButton)<StyledButtonProps>`
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

interface SplitButtonProps
  extends ComponentProps<typeof PrimereactSplitButton> {
  backgroundcolor?: ThemeBackgroundColors;
  color?: ThemeColors;
  bordercolor?: ThemeBorderColors;
}

export default function SplitButton({
  backgroundcolor = "black",
  color = "white",
  bordercolor = "white",
  size = "small",
  ...item
}: SplitButtonProps) {
  return (
    <StyledSplitButton
      {...item}
      size={size}
      color={color}
      bordercolor={bordercolor}
      backgroundcolor={backgroundcolor}
    />
  );
}
