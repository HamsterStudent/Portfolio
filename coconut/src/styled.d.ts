import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    textColor: string;
    backgroundColor: string;
    windowBg: string;
    windowBarColor: string;
    windowShadow: string;
  }
}
