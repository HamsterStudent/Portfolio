import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    textColor: string;
    backgroundColor: string;
    windowBg: string;
    windowBarColor: string;
    windowShadow: string;
    contentsShadow: string;
    invertTextColor: string;
  }
}
