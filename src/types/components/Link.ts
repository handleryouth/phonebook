import { ComponentProps } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

import { ThemeColors } from "../Theme";

export interface LinkProps extends ComponentProps<typeof Link> {
  color?: ThemeColors;
}

export interface ExternalLinkProps extends LinkProps {
  Icon?: IconType;
}
