// 1. Import the utilities
import { createBreakpoints } from "@chakra-ui/theme-tools";
// 2. Update the breakpoints as key-value pairs
export const breakpoints = createBreakpoints({
  sm: "375px",
  md: "768px",
  lg: "1024px",
  xl: "1440px",
  "2xl": "1680px",
});
