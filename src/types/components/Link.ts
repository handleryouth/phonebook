import { ComponentProps } from "react";
import { Link } from "react-router-dom";
import { ThemeColors } from "../Theme";
import { IconType } from "react-icons";

export interface LinkProps extends ComponentProps<typeof Link> {
  color?: ThemeColors;
}

export interface ExternalLinkProps extends LinkProps {
  Icon?: IconType;
}
