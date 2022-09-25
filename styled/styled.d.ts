import { ThemeStyledTypes } from "./theme.styled.types";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  // eslint-disable-next-line
  export interface DefaultTheme extends ThemeStyledTypes {}
}
