import { ClassNames, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { SplitButton as PrimereactSplitButton } from "primereact/splitbutton";
import { ComponentProps } from "react";
import { ThemeBackgroundColors, ThemeBorderColors,ThemeColors } from "types";

interface StyledSplitButtonProps {
  bordercolor: ThemeBorderColors;
}

const StyledSplitButton = styled(PrimereactSplitButton)<StyledSplitButtonProps>`
  text-align: center;
  height: 50px;
  border-color: ${({ theme, bordercolor }) => theme.borderColors[bordercolor]};

  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

interface SplitButtonProps
  extends ComponentProps<typeof PrimereactSplitButton> {
  backgroundcolor?: ThemeBackgroundColors;
  color?: ThemeColors;
  bordercolor?: ThemeBorderColors;
}

export default function SplitButton({
  backgroundcolor = "blue",
  color = "white",
  bordercolor = "white",
  size = "small",
  ...item
}: SplitButtonProps) {
  const theme = useTheme();
  return (
    <ClassNames>
      {({ css }) => {
        const buttonClassName = css({
          backgroundColor: theme.backgroundColors[backgroundcolor],
          color: theme.colors[color],
        });

        return (
          <StyledSplitButton
            {...item}
            buttonClassName={buttonClassName}
            menuButtonClassName={buttonClassName}
            size={size}
            bordercolor={bordercolor}
          />
        );
      }}
    </ClassNames>
  );
}
