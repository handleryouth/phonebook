export type Breakpoint = "320" | "560" | "920" | "1440";

export const PIXEL_BREAKPOINTS: Record<Breakpoint, number> = {
  "320": 320,
  "560": 560,
  "920": 920,
  "1440": 1440,
};

export function getBreakpoint(breakpoint: Breakpoint) {
  return `${PIXEL_BREAKPOINTS[breakpoint]}px`;
}

export function getMediaMinQuery(breakpoint: Breakpoint) {
  return `@media (min-width: ${getBreakpoint(breakpoint)})`;
}

export function getMediaMaxQuery(breakpoint: Breakpoint) {
  return `@media (max-width: ${getBreakpoint(breakpoint)})`;
}
